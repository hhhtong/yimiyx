"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class BaseController extends egg_1.Controller {
    get user() {
        return this.ctx.session.user;
    }
    success(data = {}, msg = '操作成功') {
        this.ctx.body = {
            code: 50000,
            data,
            msg
        };
    }
    fail(data = {}, code = 50001, msg = '操作失败') {
        this.ctx.body = {
            code,
            data,
            msg
        };
    }
    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}
exports.default = BaseController;
