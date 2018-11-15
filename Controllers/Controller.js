let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Author
let Tag = Model.Tag

let ControllerAuthor = require(`./ControllerAuthors`)
let ControllerArticle = require(`./ControllerArticle`)
let ControllerTag = require(`./ControllerTag`)

class Controller {
    static execute(args, options) {
        switch (args[0]) {
            case `article`:
                switch (args[1]) {
                    //TODO:
                    case "add":
                        ControllerArticle.insert(options)
                        break;

                    case "read_one":
                        ControllerArticle.read_one(options[0])
                        break;

                    case "read_all":
                        ControllerArticle.read_all()
                        break;

                    //TODO: 
                    case "update":
                        ControllerArticle.update(options, options[options.length - 1])
                        break;

                    case "delete":
                        ControllerArticle.delete(options)
                        break;
                }
                break;

            case `author`:
                switch (args[1]) {
                    case "add":
                        ControllerAuthor.insert(options)
                        break;

                    case "read_one":
                        ControllerAuthor.read_one(options)
                        break;

                    case "read_all":
                        ControllerAuthor.read_all(options)
                        break;

                    case "update":
                        ControllerAuthor.update(options, options[options.length - 1])
                        break;

                    case "delete":
                        ControllerAuthor.delete(options)
                        break;
                }
                break;

            case `tag`:
                switch (args[1]) {
                    case "add":
                        ControllerTag.insert(options)
                        break;

                    case "read_one":
                        ControllerTag.read_one(options)
                        break;

                    case "read_all":
                        ControllerTag.read_all(options)
                        break;

                    //TODO:
                    case "update":
                        ControllerTag.update(options, options[options.length - 1])
                        break;

                    case "delete":
                        ControllerTag.delete(options)
                        break;
                }
                break;
        }
    }

}

module.exports = Controller