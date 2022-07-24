"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user) {
        this.user = user;
    }
    getUser() {
        return this.user;
    }
    static implement(req, res, next) {
        res.locals.user = req.session.user;
        next();
    }
    static required(req, res, next) {
        if (!req.session.user || !req.session.user.email) {
            req.session.save(() => res.redirect('/'));
            return;
        }
        next();
    }
}
exports.default = User;
