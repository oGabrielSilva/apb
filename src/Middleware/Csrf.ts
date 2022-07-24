import { NextFunction, Request, Response } from 'express';

class Csrf {
  private csrf: string;

  constructor(req: Request) {
    this.csrf = req.csrfToken();
  }

  public setCrf(res: Response): void {
    res.locals.csrf = this.csrf;
  }

  public static implement(req: Request, res: Response, next: NextFunction) {
    const csrf = new Csrf(req);
    csrf.setCrf(res);
    next();
  }

  public static error(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
      res.redirect('/');
      return;
    }

    next();
  }
}

export default Csrf;
