const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller') 

switch (argv[1]) {
  case "add": Controller.add(argv) ;break;
  case "read_one": Controller.find(argv) ;break;
  case "read_all": Controller.show(argv) ;break;
  case "update": Controller.update(argv) ;break;
  case "erase": Controller.add(argv) ;break;
  case "help": Controller.help() ;break;
  default: Controller.help() ;break;
}

// Controller.execute(argv)