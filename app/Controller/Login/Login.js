const Controller = require('../../Core/BaseController');

class LoginViewController extends Controller {
    async login() {
        const {ctx} = this;
        // 此处要加 await 不然异步得不到数据
        const data = await ctx.service.login.findUser();
        this.success(data);
    }

}

module.exports = LoginViewController;