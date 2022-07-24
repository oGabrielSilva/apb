"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Index_1 = __importDefault(require("../Controllers/Index"));
class Routes {
    constructor() {
        this.router = express_1.default.Router();
    }
    setGlobalRoutes() {
        this.router.get('/', Index_1.default.index);
    }
    getRouter() {
        return this.router;
    }
    static implement() {
        const r = new Routes();
        r.setGlobalRoutes();
        return r.getRouter();
    }
}
exports.default = Routes;
