const argv = process.argv.slice(2)
const AuthorCon = require("./controllers/author")
const TagCon = require("./controllers/tag")
const ArticleCon = require("./controllers/article")

switch (argv[0]) {
    case "author":
        switch (argv[1]) {
            case "add":
                let data = {
                    first_name: argv[2],
                    last_name: argv[3],
                    religion: argv[4],
                    gender: argv[5],
                    age: argv[6]
                }
                AuthorCon.addData(data)
                break;
            case "read_one":
                AuthorCon.readOne(argv[2])
                break;
            case "read_all":
                AuthorCon.readAll()
                break;
            case "update":
                let dataUpdate = {
                    first_name: argv[2],
                    last_name: argv[3],
                    religion: argv[4],
                    gender: argv[5],
                    age: argv[6]
                }
                AuthorCon.updateData(dataUpdate, argv[7])
                break;
            case "delete":
                AuthorCon.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case "tag":
        switch (argv[1]) {
            case "add":
                let data = {
                    name: argv[2]
                }
                TagCon.addData(data)
                break;
            case "read_one":
                TagCon.readOne(argv[2])
                break;
            case "read_all":
                TagCon.readAll()
                break;
            case "update":
                let dataUpdate = {
                    name: argv[2]
                }
                TagCon.updateData(dataUpdate, argv[3])
                break;
            case "delete":
                TagCon.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    case "article":
        switch (argv[1]) {
            case "add":
                let data = {
                    title: argv[2],
                    body: argv[3],
                    id_author: argv[4],
                    id_tag: argv[5]

                }
                ArticleCon.addData(data)
                break;
            case "read_one":
                ArticleCon.readOne(argv[2])
                break;
            case "read_all":
                ArticleCon.readAll()
                break;
            case "update":
                let dataUpdate = {
                    title: argv[2],
                    body: argv[3],
                    id_author: argv[4],
                    id_tag: argv[5]
                }
                ArticleCon.updateData(dataUpdate, argv[6])
                break;
            case "delete":
                ArticleCon.delete(argv[2])
                break;
            default:
                break;
        }
        break;
    default:
        break;
}