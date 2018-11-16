const Model = require('../models')
const Author = Model.author
const View = require('../views/View')

class AuthorController {
    static add(first, last, religion, gender, age) {
        let obj = {
            first_name: first,
            last_name: last,
            religion: religion,
            gender: gender,
            age: age
        }
        Author.create(obj)
            .then(data => {
                View.display("Succsessfully add author data")
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static read_one(id) {
        let obj = {
            where: {id: id}
        }
        Author.findOne(obj)
            .then(data => {
                View.display(data.dataValues);
            })
            .catch(err => {
                View.displayErr(err);
            })
        // Author.findAll({
        //     where: {
        //         id: id
        //     }
        // })
        // .then(data => {
        //     View.display(data[0].dataValues)
        // })
        // .catch(err => {
        //     View.display(err)
        // })
    }

    static read_all() {
        Author.findAll()
            .then(data => {
                let result = data.map(x => x.dataValues)
                View.display(result)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static update(id, update) {
        let obj = {
            [update[0]]: update[1]
        }
        Author.update(obj, {where: {id: id}})
            .then(data => {
                View.display(`Sucsessfully updated data`)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static delete(id) {
        Author.destroy({where: {id: id}})
            .then(() => {
                View.display(`Sucsessfully deleted data`);
            })
            .catch(err => {
                View.displayErr(err);
            })
    }
    static help() {
        let data =`==================== documentation ====================`
        View.display(data)
    }
}

module.exports = AuthorController