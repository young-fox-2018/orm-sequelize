const { Author } = require('../models')
const View = require('../views/viewAuthor')

class AuthorController {
    static help() {

    }
    static add(params) {
        Author.create({
            first_name: params[0],
            last_name: params[1],
            religion: params[2],
            gender: params[3],
            age: params[4]
        }).then(data => {
            View.showData(`Succesfully added ${data.first_name}!`)
        }).catch(err => {
            View.showErr(err)
        })
    }
    static readOne(params) {
        Author.findOne({
            where: {
                id: params[0]
            }
        }).then(data => {
            View.showTables(data.dataValues)
        }).catch(err => {
            View.showErr(err)
        })
    }
    static readAll(params) {
        Author.findAll()
            .then(data => {
                View.showAll(data)
            })
            .catch(err => {
                View.showErr(err)
            })
    }
    static update(params) {
        let where = {}
        for (let i = 0; i < params.length - 2; i+=2) {
            where[params[i]] = params[i + 1]
        }
        Author.update(where, {
            where: {
                id: params[params.length-1]
            }
        })
    }
    static delete(params) {
        
    }
}

module.exports = AuthorController