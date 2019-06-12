const argv = process.argv.slice(2)
const AuthorController = require('./controllers/authorController')
const ArticleController = require('./controllers/articleController')
const TagController = require('./controllers/tagController')

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
    case 'article':
        switch (argv[1]) {
            case 'add':
                ArticleController.add(argv[2], argv[3], argv[4], argv[5], argv[6])
                break;
            case 'findOne':
                ArticleController.findOne(argv[2])
                break;
            case 'findAll':
                ArticleController.findAll()
                break;
            case 'update':
                ArticleController.update(argv[2], argv.slice(3))
                break;
            case 'delete':
                ArticleController.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case 'tag':
        switch (argv[1]) {
            case 'add':
                TagController.add(argv[2], argv[3], argv[4], argv[5], argv[6])
                break;
            case 'findOne':
                TagController.findOne(argv[2])
                break;
            case 'findAll':
                TagController.findAll()
                break;
            case 'update':
                TagController.update(argv[2], argv.slice(3))
                break;
            case 'delete':
                TagController.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    default:
        break;
}