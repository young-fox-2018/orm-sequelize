argv = process.argv.slice(2)
const authorController = require("./Controllers/authorController")
const articleController = require("./Controllers/articleController")
const tagController = require("./Controllers/tagController")

switch (argv[0]) {
    case "author":
        switch (argv[1]) {
            case "add":
                authorController.add(argv[2], argv[3], argv[4], argv[5], argv[6])
                break;
            case "read_one":
                authorController.readOne(argv[2], argv[3]) // first name, last name
                break;
            case "read_all":
                authorController.readAll()
                break;
            case "update":
                authorController.update(argv[2], argv.slice(3))
                break;
            case "erase":
                authorController.erase(argv[2])
                break;
            default:
                break;
        }
    break;

    case "article":
        switch (argv[1]) {
            case "add":
                articleController.add(argv[2], argv[3], argv[4], argv[5]) // title body tag id author id
                break;
            case "read_one":
                articleController.readOne(argv[2])
                break;
            case "read_all":
                articleController.readAll()
                break;
            case "erase":
                articleController.erase(argv[2])
                break;
            default:
                break;
        }
    break;

    case "tag":
        switch (argv[1]) {
            case "add":
                tagController.add(argv[2])
                break;
            case "readOne":
                tagController.readOne(argv[2])
                break;
            case "readAll":
                tagController.readAll()
                break;
            case "update":
                tagController.update(argv[2], argv.slice(3))
                break;
            case "erase":
                tagController.erase(argv[2])
                break;
            default:
                break;
        }
    break;
    
    default:
        break;
}