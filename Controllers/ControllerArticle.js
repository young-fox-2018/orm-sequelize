const { Article } = require('../models/index')
const View = require('../Views/View')


class ControllerArticle {
    static addArticle(newArticle) {
        Article.create(newArticle)
            .then(article => {
                View.showData(`Success add new Article with id:${article.id}`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readOne(id) {
        Article.findOne({
            where: {
                id: id
            }
        })
            .then(article => {
                View.showData(article.dataValues)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readAll() {
        Article.findAll()
            .then(articles => {
                View.showData(articles)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static update(id, updArticle) {
        Article.update(updArticle, {
            where: {
                id: id
            }
        })
            .then(data => {
                View.showData(`Data dengan id: ${id} berhasil di update!`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static erase(id) {
        Article.destroy({
            where: {
                id: id
            }
        })
            .then(article => {
                View.showData(`Data dengan id: ${id} berhasil di hapus!`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
}


module.exports = ControllerArticle