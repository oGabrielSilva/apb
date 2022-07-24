import e from 'express';
import AccountController from '../Controllers/Account';
import IndexController from '../Controllers/Index';

const router = e.Router();

router.get('/', IndexController.index);

router.get('/account/signin', AccountController.signIn);

router.get('*', async (req, res) => {
  res.render('404');
});

export default router;

// class Routes {
//   private readonly router: Router;

//   constructor() {
//     this.router = e.Router();
//     this.setGlobalRoutes();
//   }

//   private setGlobalRoutes() {
//     this.router.get('/', IndexController.index);
//   }

//   public getRouter() {
//     return this.router;
//   }

//   public static implement() {
//     return new Routes().getRouter();
//   }
// }

// export default Routes;
