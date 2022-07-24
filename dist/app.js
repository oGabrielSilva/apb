"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const csurf_1 = __importDefault(require("csurf"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const Csrf_1 = __importDefault(require("./Middleware/Csrf"));
const User_1 = __importDefault(require("./Middleware/User"));
const Router_1 = __importDefault(require("./Router/Router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
mongoose_1.default
    .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.emit('connect'))
    .catch((err) => console.log('Mongoose connect error', err.message));
const sessionConfig = (0, express_session_1.default)({
    secret: process.env.SECRET,
    store: connect_mongo_1.default.create({ mongoUrl: process.env.MONGO }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
});
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.set('view engine', 'njk');
nunjucks_1.default.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});
app.use((0, helmet_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.use((0, cookie_parser_1.default)());
app.use(sessionConfig);
app.use((0, csurf_1.default)({ cookie: true }));
app.use(Csrf_1.default.implement);
app.use(Csrf_1.default.error);
app.use(User_1.default.implement);
app.use(User_1.default.required);
app.use(Router_1.default.implement);
app.on('connect', () => {
    app.listen(port, () => {
        console.log(`\nServer on http://127.0.0.1:${port}\n`);
    });
});
