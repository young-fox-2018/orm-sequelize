const Model = require('../models/index')
const View = require('../views/View')

class TagController {
    static add(params) {
        let objTag = {
            name: params[0]
        }
        Model.Tag.create(objTag)
            .then((data) => {
                View.displayMsg(`success created tag`)
            })
            .catch((err) => {
                View.displayError(err)
            })
    }

    static findOne (id) {
        Model.Tag.findOne({
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
        Model.Tag.findAll()
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
        let objValues = {}

        objValues[field] = value

        Model.Tag.update(objValues, {
            where: {
                id: id
            }
        })
            .then((data) => {
                if (data) {
                    View.displayMsg(`Success update data Tag ID ${id}`)
                } else {
                    View.displayError(`ID ${id} not found`)
                }
            })
            .catch((err) => {
                View.displayError(err)
            })
    }

    static delete(id) {
        Model.Tag.destroy({
            where: {
                id: id
            }
        })
            .then((data) => {
                if (data) {
                    View.displayMsg(`Success delete Tag ID ${id}`)
                } else {
                    View.displayError(`ID ${id} not found`)
                }
            })
            .catch((err) => {
                View.displayError(err)
            })
    }
}

module.exports = TagController