const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')
const AuthorController = require('./controllers/AuthorController')
const TagController = require('./controllers/TagController')
const ArticleController = require('./controllers/ArticleController')


switch (argv[0]) {
    case 'author':
        switch (argv[1]) {
            case 'add': AuthorController.add(argv.slice(2))
                break;
            case 'read_one' : AuthorController.read_one(argv.slice(2))
                break;
            case 'read_all' : AuthorController.read_all()
                break;
            case 'update' : AuthorController.update(argv.slice(2))
                break;
            case 'erase' : AuthorController.erase(argv.slice(2))
                break;
            default: Controller.help()
                break;
        }
        break;
    case 'tag':
        switch (argv[1]) {
            case 'add':
                break;
            case 'read_one' :
                break;
            case 'read_all' :
                break;
            case 'update' :
                break;
            case 'erase' :
                break;
            default:
                break;
        }
        break;
    case 'article': 
        switch (argv[1]) {
            case 'add':
                break;
            case 'read_one' :
                break;
            case 'read_all' :
                break;
            case 'update' :
                break;
            case 'erase' :
                break;
            default:
                break;
        }
        break;
    case ('help') : Controller.help()
        break;
    default: Controller.help()
        break;
}
