const AuthorController = require('./controllers/AuthorController')
const input = process.argv.slice(2)
const params = input.slice(2)

switch (input[0]) {
    case "help":

        break;
    case "author":
        switch (input[1]) {
            case "add":
                AuthorController.add(params)
                break;
            case "readOne":
                AuthorController.readOne(params)
                break;
            case "readAll":
                AuthorController.readAll()
                break;
            case "update":
                AuthorController.update(params)
                break;
            default:
                break;
        }
        break;

    default:
        break;
}