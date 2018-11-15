let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Authors
let Tag = Model.Tags
let View = require(`../View/View`)

class ControllerAuthors {
    static insert(options) {
        console.clear()
        if (options.length < 5) {
            View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
        } else {
            console.clear()
            Author.create({
                first_name: options[0],
                last_name: options[1],
                religion: options[2],
                gender: options[3],
                age: options[4]
            }).then((result) => {
                //TODO:
                View.viewData(`Insert berhasil with data ID: ${result.id}`)
            }).catch((err) => {
                View.viewError(err)
            });
        }
    }

    static read_one(id) {
        console.clear()
        Author.findOne({
            where: {
                id: id
            }
        }).then((result) => {
            console.clear()
            if (result == null) {
                View.viewData(`DATA TIDAK ADA`)
            } else {
                View.viewData(result.dataValues)
            }

        }).catch((err) => {
            console.clear()
            View.viewError(err)
        });
    }

    static read_all() {
        console.clear()
        Author.findAll().then((result) => {
            View.viewData(result.map(function (params) {
                return params.dataValues
            }))
        }).catch((err) => {
            View.viewError(err)
        });
    }

    static update() { }

    static delete() {
        console.clear()
        Author.destroy({
            where: {
                id: id
            }
        }).then((result) => {
            if (result == 1) {
                View.viewData(`Success delete data with status: ${result}`)
            } else {
                View.viewData(`Failed delete data with status: ${result}`)
            }
        }).catch((err) => {
            View.viewError(err)
        });
    }

}

module.exports = ControllerAuthors