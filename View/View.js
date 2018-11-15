const chalk = require('chalk');
class View{
    static viewError(err) {
        console.log(chalk.blue(err));
        
    }

    static viewData(data) {
        console.log(chalk.blue(data));
        
    }
}

module.exports = View