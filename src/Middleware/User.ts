import { NextFunction, Request, Response } from 'express';
import { TUser } from '../types/global';

class User {
  private user: TUser;

  constructor(user: TUser) {
    this.user = user;
  }

  public getUser(): TUser {
    return this.user;
  }

  public static implement(req: Request, res: Response, next: NextFunction) {
    res.locals.user = req.session.user;
    next();
  }

  public static required(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user || !req.session.user.email) {
      req.session.save(() => res.redirect('/'));
      return;
    }
    next();
  }
}

export default User;
