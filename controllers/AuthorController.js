const Model = require('../models/index')
const View = require('../views/View')

class AuthorController {
    static add(params) {

        let objAuthor = {
            first_name: params[0],
            last_name: params[1],
            religion: params[2],
            gender: params[3],
            age: params[4]
        }


        Model.Author.create(objAuthor)
        .then((data) => {
            View.displayMsg(`success created author`)
        })
        .catch((err) => {
            View.displayError(err)
        })
        
    }

    static findOne (id) {
        Model.Author.findOne({
            where: {
                id: id
            }
        })
            .then((data) => {
                if (data){
                    View.displayMsg(data.dataValues)
                } else {
                    View.displayError('Data not found')
                }
            })
            .catch((err) => {
                View.displayError(err)
            })
    }

    static findAll(){
        Model.Author.findAll()
            .then((data) => {
                data = data.map((element) => element.dataValues)
                
                View.displayMsg(data)
            })
            .catch((err) => {
                View.displayError(err)
                process.exit()
            })
    }

    static update(id, field, value) {
        let objValue= {}

        objValue[field] = value

        Model.Author.update(objValue, {
            where: {
                id: id
            }
        })
            .then((data) => {
                if (data) {
                    View.displayMsg(`Success update data Author ID ${id}`)
                } else {
                    View.displayError(`ID ${id} not found`)
                }
            })
            .catch((err) => {
                View.displayError(err)
            })
    }

    static delete(id) {
        Model.Author.destroy({
            where : {
                id : id
            }
        })
            .then((data) => {
                if (data) {
                    View.displayMsg(`Success delete Author ID ${id}`)
                } else {
                    View.displayError(`ID ${id} not found`)
                }
            })
            .catch((err) => {
                View.displayError(err)
            })
    }
}


module.exports = AuthorController