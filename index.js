const argv = process.argv.slice(2)
const AuthorController = require('./controllers/AuthorController')
const ArticleController = require('./controllers/ArticleController')
const TagController = require('./controllers/TagController')

if (argv[0] === 'author') {
    switch (argv[1]) {
        case 'add':
            AuthorController.add(argv.slice(2))
            break;
        case 'read_one':
            AuthorController.findOne(argv[2])
            break
        case 'read_all':
            AuthorController.findAll()
            break
        case 'update':
            AuthorController.update(argv[2], argv[3], argv[4])
            break
        case 'delete':
            AuthorController.delete(argv[2])
        default:
            console.log('--help')
            break;
    }
} else if (argv[0] == 'article') {
    switch (argv[1]) {
        case 'add':
            ArticleController.add(argv.slice(2))
            break;
        case 'read_one':
            ArticleController.findOne(argv[2])
            break
        case 'read_all':
            ArticleController.findAll()
            break
        case 'update':
            ArticleController.update(argv[2], argv[3], argv[4])
            break
        case 'delete':
            ArticleController.delete(argv[2])
        default:
            console.log('--help')
            break;
    }
}
else if (argv[0] == 'tag') {
    switch (argv[1]) {
        case 'add':
            TagController.add(argv.slice(2))
            break;
        case 'read_one':
            TagController.findOne(argv[2])
            break
        case 'read_all':
            TagController.findAll()
            break
        case 'update':
            TagController.update(argv[2], argv[3], argv[4])
            break
        case 'delete':
            TagController.delete(argv[2])
        default:
            console.log('--help')
            break;
    }
}

else {
    console.log('wrong command')
}