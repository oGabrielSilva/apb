"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Csrf {
    constructor(req) {
        this.csrf = req.csrfToken();
    }
    setCrf(res) {
        res.locals.csrf = this.csrf;
    }
    static implement(req, res, next) {
        const csrf = new Csrf(req);
        csrf.setCrf(res);
        next();
    }
    static error(error, req, res, next) {
        if (error) {
            console.log({ error });
            res.redirect('/');
            return;
        }
        next();
    }
}
exports.default = Csrf;
