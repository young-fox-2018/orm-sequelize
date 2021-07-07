const Controller = require('./Controllers/Controller');
const argv = process.argv.slice(2);

Controller.execute(argv);
