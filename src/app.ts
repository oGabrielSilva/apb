/* eslint-disable no-console */
import dotenv from 'dotenv';
import e from 'express';
import path from 'path';
import session from 'express-session';
import csurf from 'csurf';
import MongoStore from 'connect-mongo';
import helmet from 'helmet';
import mongoose from 'mongoose';
import nunjucks from 'nunjucks';
import cookieParser from 'cookie-parser';

import Csrf from './Middleware/Csrf';
import User from './Middleware/User';
import router from './Router/Router';

dotenv.config();

const app = e();
const port = process.env.PORT!;

mongoose
  .connect(process.env.MONGO!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.emit('connect'))
  .catch((err) => console.log('Mongoose connect error', err.message));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

const sessionConfig = session({
  secret: process.env.SECRET!,
  store: MongoStore.create({ mongoUrl: process.env.MONGO }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'njk');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", 'cdn.jsdelivr.net/npm/bootstrap@5.2.0/'],
      },
    },
  }) // eslint-disable-line comma-dangle
);
app.use(e.urlencoded({ extended: true }));
app.use(e.json());
app.use(e.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(sessionConfig);
app.use(csurf({ cookie: true }));
app.use(Csrf.implement);
app.use(Csrf.error);
app.use(User.implement);
app.use(router);

app.on('connect', () => {
  app.listen(port, () => {
    console.log(`\nServer on http://127.0.0.1:${port}`);
  });
});
