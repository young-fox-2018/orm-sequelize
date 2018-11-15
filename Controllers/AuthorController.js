const View = require('../Views/View')
const Model = require('../models') 
const Author = Model.Author

class AuthorController {

    static add (option) {
        Author.create({
            first_name: option[1],
            last_name: option[2],
            religion: option[3],
            gender: option[4],
            age: option[5]
        })
        .then((data) => {
            View.successDisplay(`berhasil menambahkan ${data.dataValues.first_name} ke dalam data author`)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static readOne (option) {
        Author.findOne({
            where: {
                id: option[1]
            }
        })
        .then((data) => {
            View.successDisplay(data.dataValues)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static readAll () {
        Author.findAll()
        .then((data) => {

            View.successDisplay(data)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static update (option) {
        Author.update({
            first_name: option[3]
        }, {
            where: {
                id: option[1]
            }
        })
        .then(() => {
            console.log(`yey ke update`)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static delete (option) {
        Author.destroy({
            where: {
                id: option[1]
            }
        })
        .then((data) => {
            if(data === 0) {
                View.errDisplay(`data not found`)
            } else {
                View.successDisplay(`yey ke delete`)
            }
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

}

module.exports = AuthorController 