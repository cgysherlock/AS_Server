const Controller = require('../../Core/BaseController');

class LoginViewController extends Controller {
    async login() {
        const {ctx} = this;
        // ctx.get
        const data = ctx.service.login.findUser;
        this.success(data);
    }

}

module.exports = LoginViewController;