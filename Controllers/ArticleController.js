const View = require('../Views/View')
const Model = require('../models') 
const Article = Model.Article

class ArticleController {

    static add (option) {
        Article.create({
            title: option[1],
            body: option[2],
            AuthorId: option[3],
            TagId: option[4]
        })
        .then((data) => {
            View.successDisplay(`berhasil menambahkan ${data.dataValues.first_name} ke dalam data Article`)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static readOne (option) {
        Article.findOne({
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
        Article.findAll()
        .then((data) => {

            View.successDisplay(data)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static update (option) {
        //masih prosess
        // Article.update({
        //     option[2]: option[3]
        // }, {
        //     where: {
        //         id: option[1]
        //     }
        // })
        // .then(() => {
        //     console.log(`yey ke update`)
        //     process.exit()
        // })
        // .catch((err) => {
        //     View.errDisplay(err)
        // })
    }

    static delete (option) {
        Article.destroy({
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

module.exports = ArticleController 