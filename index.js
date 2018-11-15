// const Controller = require('./Controllers/Controller')
const ControllerAuthor = require('./Controllers/ControllerAuthor')
const ControllerArticle = require('./Controllers/ControllerArticle')
const ControllerTag = require('./Controllers/ControllerTag')
const input = process.argv.slice(2)


switch (input[0]) {
    case 'author':
        switch (input[1]) {
            case 'add':
                let newAuthor = {
                    first_name: input[2],
                    last_name: input[3],
                    religion: input[4],
                    gender: input[5],
                    age: input[6]
                }
                ControllerAuthor.addAuthor(newAuthor)
                break
            case 'read_one':
                ControllerAuthor.readOne(input[2])
                break
            case 'read_all':
                ControllerAuthor.readAll()
                break;
            case 'update':
                let updAuthor = {
                    first_name: input[3],
                    last_name: input[4],
                    religion: input[5],
                    gender: input[6],
                    age: input[7]
                }
                ControllerAuthor.update(input[2], updAuthor)

                break
            case 'erase':
                ControllerAuthor.erase(input[2])
                break
        }
    case 'tag':
        switch (input[1]) {
            case 'add':
                let newTag = {
                    name: input[2]
                }
                ControllerTag.addTag(newTag)

                break;
            case 'read_one':
                ControllerTag.readOne(input[2])
                break
            case 'read_all':
                ControllerTag.readAll()
                break;
            case 'update':
                let updTag = {
                    first_name: input[3]
                }
                ControllerTag.update(input[2], updTag)
                break
            case 'erase':
                ControllerTag.erase(input[2])
                break
        }
    case 'article':
        switch (input[1]) {
            case 'add':
                let newArticle = {
                    title: input[2],
                    body: input[3],
                    authorId: input[4],
                    tagId: input[5]
                }
                ControllerArticle.addArticle(newArticle)
                break;
            case 'read_one':
                ControllerArticle.readOne(input[2])
                break
            case 'read_all':
                ControllerArticle.readAll()
                break;
            case 'update':
                let updArticle = {
                    title: input[3],
                    body: input[4],
                    authorId: input[5],
                    tagId: input[6]

                }
                ControllerArticle.update(input[2], updArticle)
                break
            case 'erase':
                ControllerArticle.erase(input[2])
                break
        }
    // case 'help':
    //     Controller.help()
    // default:
    //     Controller.help()
    //     break
}