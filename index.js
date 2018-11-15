input = process.argv.slice(2)
const AuthorController = require('./controllers/AuthorController')

switch (input[0]) {
    case "author":
        if (input[1] === "add") {
            let option = {
                first_name:input[2],
                last_name:input[3],
                religion:input[4],
                gender:input[5],
                age:Number(input[6]),
                createdAt: new Date(),
                updateAt: new Date()
            }
            AuthorController.add(option)
        }
        else if (input[1] === "read_one") {
            let option = {
                "id":Number(input[2])
            }
             AuthorController.readOne(option)
        } 
        else if (input[1] === "read_one") AuthorController.readAll()
        else if (input[1] === "update") AuthorController.update()
        else if (input[1] === "delete") AuthorController.delete()
            break;
    case "tag":
        // if (input[1] === "add")
        // else if (input[1] === "read_one")
        // else if (input[1] === "read_one")
        // else if (input[1] === "update")
        // else if (input[1] === "delete")
            break;
    case "article":
        // if (input[1] === "add")
        // else if (input[1] === "read_one")
        // else if (input[1] === "read_one")
        // else if (input[1] === "update")
        // else if (input[1] === "delete")
            break;
    default:
        break;
}