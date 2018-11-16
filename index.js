const argv = process.argv.slice(2)
const AuthorController = require('./Controllers/AuthorController')
const TagController = require('./Controllers/TagController')
const ArticleController = require('./Controllers/ArticleController')
const options = argv.slice(2)

switch (argv[0]) {
    case "author":
        switch (argv[1]) {
            case "add":
                AuthorController.add(options)                
                break;
            case "read_one":
                AuthorController.readone(options)
                break;
            case "read_all":
                AuthorController.readall()
                break;
            case "update":
                AuthorController.update(options)
                break;
            case "delete":
                AuthorController.delete(options)
                break;
            default:
                break;
        }
        break;
    case "article":
        switch (argv[1]) {
            case "add":
                ArticleController.add(options)                
                break;
            case "read_one":
                ArticleController.readone(options)
                break;
            case "read_all":
                ArticleController.readall()
                break;
            case "update":
                ArticleController.update(options)
                break;
            case "delete":
                ArticleController.delete(options)
                break;
            default:
            break;
        }
    break;
    case "tag":
        switch (argv[1]) {
            case "add":
                TagController.add(options)                
                break;
            case "read_one":
                TagController.readone(options)
                break;
            case "read_all":
                TagController.readall()
                break;
            case "update":
                TagController.update(options)
                break;
            case "delete":
                TagController.delete(options)
                break;
            default:
            break;
        }
    break;

    default:
        break;
}