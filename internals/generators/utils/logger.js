
/**
 * logger
* */

const chalk = require('chalk');


var logger = {

  // error
  error: err => {
    console.error(chalk.red(err));
  },

  // info
  info: info => {
    console.log(info);
  },

  // warning
  warning: msg =>{
    console.error(chalk.yellow(err));
  }


}


module.exports = logger;
