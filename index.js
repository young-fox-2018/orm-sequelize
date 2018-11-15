const argv = process.argv.slice(2)

const job = argv[0]
const command = argv[1]
const options = argv.slice(2)
const AuthorController = require("./controllers/AuthorController.js")
const ArticleController = require("./controllers/ArticleController.js")
const TagController = require("./controllers/TagController.js")

switch (job) {
    case 'author':
        switch (command) {
            case "add":
                AuthorController.add(options)
                break;
            case "read_one":
                AuthorController.read_one(options)
                break;
            case "read_all":
                AuthorController.read_all(options)
                break;
            case "update":
                AuthorController.update(options)
                break;
            case "erase":
                AuthorController.erase(options)
                break;
            default:
                View.displayHelp()
                break;
        }
        break;
    case 'tag':
            switch (command) {
                case "add":
                    TagController.add(options)
                    break;
                case "read_one":
                    TagController.read_one(options)
                    break;
                case "read_all":
                    TagController.read_all(options)
                    break;
                case "update":
                    TagController.update(options)
                    break;
                case "erase":
                    TagController.erase(options)
                    break;
                default:
                    View.displayHelp()
                    break;
            }
        break;
    case 'article':
        switch (command) {
            case "add":
                ArticleController.add(options)
                break;
            case "read_one":
                ArticleController.read_one(options)
                break;
            case "read_all":
                ArticleController.read_all(options)
                break;
            case "update":
                ArticleController.update(options)
                break;
            case "erase":
                ArticleController.erase(options)
                break;
            default:
                View.displayHelp()
                break;
        }
        break;
    case help:
        View.displayHelp()
        break;
    default:
        View.displayHelp()
        break;
}