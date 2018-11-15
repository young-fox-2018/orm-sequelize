const argv = process.argv.slice(2)
const AuthorController = require('./controllers/authorController')

console.log(argv)

switch (argv[0]) {
    case 'author':
        switch (argv[1]) {
            case 'add':
                AuthorController.add(argv[2], argv[3], argv[4], argv[5], argv[6])
                break;
            case 'findOne':
                AuthorController.findOne(argv[2])
                break;
            case 'findAll':
                AuthorController.findAll()
                break;
            case 'update':
                AuthorController.update(argv[2], argv.slice(3))
                break;
            case 'delete':
                AuthorController.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case 'help':

        break;

    default:
        break;
}