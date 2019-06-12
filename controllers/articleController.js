const Model = require('../models/index')
const View = require('../views/view')
class ArticleController {
    static add(title, body, AuthorId, TagId) {
        Model.Article.create({
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: TagId
        })
            .then(function () {
                View.showData(`Data successfully registered`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findOne(value) {
        Model.Article.findOne({
            where: {
                id: value
            }
        })
            .then(function (article) {
                View.findOne(article)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findAll() {
        Model.Article.findAll()
            .then(function (articles) {
                View.showFindAll(articles)
            })
        process.exit()
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static update(id, input) {
        let option = {}
        for (let i = 0; i < input.length; i += 2) {
            option[input[i]] = input[i + 1]
        }
        Model.Article.update(option, {
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
        Model.Article.destroy({
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


module.exports = ArticleController