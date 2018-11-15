const View = require('../views/view')
const Model = require('../models/index')

class AuthorController {
    static add(first_name, last_name, religion, gender, age) {
        Model.Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        })
            .then(function (author) {
                View.showData(`Data with name ${author.first_name} ${author.last_name} successfully registered`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findOne(id) {
        Model.Author.findOne({
            where: {
                id: id
            }
        })
            .then(function (author) {
                View.findOne(author)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findAll() {
        Model.Author.findAll()
            .then(function (authors) {
                View.showFindAll(authors)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static update(id, input) {
        let option = {}
        // console.log(input)
        for (let i = 0; i < input.length; i += 2) {
            option[input[i]] = input[i + 1]
        }
        // console.log(option)
        Model.Author.update(option, {
            where: {
                id: id
            }
        })
            .then(function () {
                View.showData(`Data successfully updated with ID: ${id}`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static delete(id) {
        Model.Author.destroy({
            where: {
                id: id
            }
        })
            .then(function () {
                View.showData(`Data successfully deleted with ID: ${id}`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
}


module.exports = AuthorController