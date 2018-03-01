const Service = require('egg').Service;

class LoginService extends Service {
    async findUser() {
        const result1 = await this.app.mysql.get('user');
        return result1;
    }
}

module.exports = LoginService;