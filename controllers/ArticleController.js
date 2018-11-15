const Model = require('../models/index')
const View = require('../views/View')

class ArticleController {
    static add (params) {

        let objTag = {
            title: params[0],
            body: params[1],
            AuthorId: params[2],
            TagId: params[3]
        }

        Model.Article.create(objTag)
            .then((data) => {
                View.displayMsg(`success created tag`)
            })
            .catch((err) => {
                View.displayError(err)
            })
    }

    static findOne (id) {
        Model.Article.findOne({
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

    static findAll () {
        Model.Article.findAll()
            .then((data) =>{
                data = data.map((element) => element.dataValues)
                View.displayMsg(data)
            })
            .then((err) => {
                View.displayError(err)
            })
    }

    static update (id, field, value) {
        let objValue = {}

        objValue[field] = value

        Model.Article.update(objValue, {
            where: {
                id: id
            }
        })
            .then((data) => {
                View.displayMsg(`Success update data Article ID ${id}`)
            })
            .catch((err) => {
                View.displayError(err)
            })
    }
    
    static delete (id) {
        Model.Article.destroy({
            where: {
                id: id
            }
        })
            .then((data) => {
                View.displayMsg(`Success delete Author ID ${id}`)
            })
            .catch((err) => {
                View.displayError(err)
            })
    }
}

module.exports = ArticleController