const argv = process.argv.slice(2)
const AuthorController = require('./controllers/AuthorController')
const TagController = require('./controllers/TagController')
const ArticleController = require('./controllers/ArticleController')

switch (argv[0]) {
    case "author":
        switch (argv[1]) {
            case "add":
                AuthorController.add(argv[2], argv[3], argv[4], argv[5], argv[6])
                break;
            case "read_one":
                AuthorController.read_one(argv[2])
                break;
            case "read_all":
                AuthorController.read_all()
                break;
            case "update":
                AuthorController.update(argv[2], argv.slice(3))
                break;
            case "delete":
                AuthorController.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case "tag":
        switch (argv[1]) {
            case "add":
                TagController.add(argv[2])
                break;
            case "read_one":
                TagController.read_one(argv[2])
                break;
            case "read_all":
                TagController.read_all()
                break;
            case "update":
                TagController.update(argv[2], argv.slice(3))
                break;
            case "delete":
                TagController.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case "article":
    switch (argv[1]) {
        case "add":
            ArticleController.add(argv[2], argv[3], argv[4], argv[5])
            break;
        case "read_one":
            ArticleController.read_one(argv[2])
            break;
        case "read_all":
            ArticleController.read_all()
            break;
        case "update":
            ArticleController.update(argv[2], argv.slice(3))
            break;
        case "delete":
            ArticleController.delete(argv[2])
            break;
        default:
            break;
    }
        break;
    case "help":
        AuthorController.help()
        break;
    default:
        break;
}