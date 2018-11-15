"use strict"

const argv= process.argv.slice(2)
const Controller = require('./controllers/Controller')

switch(argv[0]) {
    case 'help':
        Controller.getHelp()
        break
    case 'author':
        let authorCommand = argv[1]
        
        if (authorCommand === 'add') {
            Controller.addAuthor(argv.slice(2))
        } else if (authorCommand === 'addInstance') {
            Controller.addAuthorWithInstance(argv.slice(2))
        } else if (authorCommand === 'read_one') {
            Controller.findOneAuthor(argv.slice(2))
        } else if (authorCommand === 'read_all') {
            Controller.findAllAuthor()
        } else if (authorCommand === 'update') {
            Controller.updateAuthor(argv.slice(2))
        } else if (authorCommand === 'delete') {
            Controller.deleteAuthor(argv.slice(2))
        } else if (authorCommand === 'test') {
            Controller.findLike(argv.slice(2))
        }

        break
    case 'tag' :
        let tagcommand = argv[1]

        if (tagcommand === 'add') {
            Controller.addTag(argv.slice(2))
        } else if (tagcommand === 'read_one') {
            Controller.findOneTag(argv.slice(2))
        } else if (tagcommand === 'read_all') {
            Controller.findAllTags()
        } else if (tagcommand === 'update') {
            Controller.updateTag(argv.slice(2))
        } else if (tagcommand === 'delete') {
            Controller.deleteTag(argv.slice(2))
        } 

        break
    case 'article':
    let articleCommand = argv[1]
        if (articleCommand === 'add') {
            Controller.addArticle(argv.slice(2))
        } else if (articleCommand === 'read_one') {
            Controller.findOneArticle(argv.slice(2))
        } else if (articleCommand === 'read_all') {
            Controller.findAllArticles()
        } else if (articleCommand === 'update') {
            Controller.updateArticle(argv.slice(2))
        } else if (articleCommand === 'delete') {
            Controller.deleteArticle(argv.slice(2))
        }
}