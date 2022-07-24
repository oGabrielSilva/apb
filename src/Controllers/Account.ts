import axios from 'axios';
import { Request, Response } from 'express';

class AccountController {
  public static async signIn(req: Request, res: Response) {
    const ufs = await (
      await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    ).data;
    res.render('signin', { title: 'Apollo - Crie sua conta', ufs });
  }
}

export default AccountController;
