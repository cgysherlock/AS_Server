
const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(JSONData) {
        this.ctx.body  = {
            success: true ,
            result: JSONData,
        };
    }

    error(message) {
        this.ctx.body = {
            success: false ,
            message: message,
        };
    }

}

module.exports = BaseController;