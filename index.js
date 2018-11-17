
const args = process.argv.slice(2);
const Author = require("./Author/Author");
const Article = require("./Author/article");
const Tags = require("./Author/tags");
const command = args[0];
const options = args.slice(1);

switch(command) {
    case "add":
    Author.addData(options);
    Article.addDataArticle(options);
    Tags.addTags(options);
    break;
    case "read_one" :
    Author.readOne(options);
    Article.readOneArticle(options);
    Tags.readOneTags(options);
    break;
    case "read_all" :
    Author.readAll(options);
    Article.findAllArticle(options);
    Tags.readAllTags(options);
    break;
    case "update" :
    Author.updateData(options);
    Article.updateArticle(options);
    Tags.updateTags(options);
    case "delete" :
    Author.deleteData(options);
    Article.deleteArticle(options);
    Tags.deleteTags(options);
    break;
}

// Author.addData()
