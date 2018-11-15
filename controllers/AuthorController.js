const {Author} = require('../models/index')
const View = require('../Views/View')

class AuthorController {
    
    static add(option) {
        Author.create(option)
            .then(() => {
                View.showMsg(`${option.last_name} Successfully add`)
            })
            .catch((err) => {
                View.showError(err)
            })
        process.exit()
    }

    static readOne(option) {
        console.log(option)
        Author.findOne({where:option})
            .then(data => {
                View.showData(data)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
        }

    static readAll() {

    }

    static update() {

    }

    static delete() {

    }
}

module.exports = AuthorController