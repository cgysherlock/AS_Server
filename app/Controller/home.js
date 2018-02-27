'use strict';
const util = require('util');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result1 = await this.app.mysql.get('user');
    // const result = await this.app.mysql.get('user', {id: 1});
    if (util.isUndefined(result1)) {
      this.ctx.body = 'result1';  
    }
    
    
  }
}

module.exports = HomeController;
