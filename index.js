const argv = process.argv.slice(2)
const command = argv[0]
const option = argv.slice(1)
const AuthorController = require('./Controllers/AuthorController')
const ArticleController = require('./Controllers/ArticleController')
const TagController = require('./Controllers/TagController')

switch (command) {
    case 'author':
        if(option[0] === 'add') {
            AuthorController.add(option)
        } else if(option[0] === 'read_one') {
            AuthorController.readOne(option)
        } else if(option[0] === 'read_all') {
            AuthorController.readAll(option)
        } else if(option[0] === 'update') {
            AuthorController.update(option)
        } else if(option[0] === 'delete') {
            AuthorController.delete(option)
        } 
        break;

    case 'article':
        if(option[0] === 'add') {
            ArticleController.add(option)
        } else if(option[0] === 'read_one') {
            ArticleController.readOne(option)
        } else if(option[0] === 'read_all') {
            ArticleController.readAll(option)
        } else if(option[0] === 'update') {
            ArticleController.update(option)
        } else if(option[0] === 'delete') {
            ArticleController.delete(option)
        } 
        break;

    case 'tag':
        if(option[0] === 'add') {
            TagController.add(option)
        } else if(option[0] === 'read_one') {
            TagController.readOne(option)
        } else if(option[0] === 'read_all') {
            TagController.readAll(option)
        } else if(option[0] === 'update') {
            TagController.update(option)
        } else if(option[0] === 'delete') {
            TagController.delete(option)
        } 
        break;

    default:
        break;
}