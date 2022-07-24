import { Request, Response } from 'express';

class IndexController {
  private constructor() {}

  public static index(req: Request, res: Response) {
    res.render('index', { title: 'Oi' });
  }
}

export default IndexController;
