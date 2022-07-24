"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() { }
    static index(req, res) {
        res.render('index');
    }
}
exports.default = IndexController;
