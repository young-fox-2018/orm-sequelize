
const args = process.argv.slice(2);
const Controller = require("./Controller/controller")
const Article = require("./Controller/article")
const command = args[0];
const options = args.slice(1);

// console.log(options)

switch(command) {
    case "add":
    Controller.addData(options);
    Article.addDataArticle(options);
    break;
    case "read_one" :
    Controller.readOne(options);
    Article.readOneArticle(options);
    break;
    case "read_all" :
    Controller.readAll(options);
    Article.findAllArticle(options);
    break;
    case "update" :
    Controller.updateData(options);
    Article.updateArticle(options);
    case "delete" :
    Controller.deleteData(options);
    Article.deleteArticle(options)
    break;
}

// Controller.addData()
