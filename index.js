
const args = process.argv.slice(2);
const Controller = require("./Controller/controller")
const command = args[0];
const options = args.slice(1);

switch(command) {
    case "add" : Controller.addData(options);
    break;
    case "read_one" : Controller.readOne(options);
    break;
    case "read_all" : Controller.readAll(options);
    break;
    case "update" : Controller.updateData(options);
    case "delete" : Controller.deleteData(options);
    break
}

// Controller.addData()
