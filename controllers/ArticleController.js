const Model = require('../models')
const Article = Model.article
const View = require('../views/View')

class ArticleController {
    static add(title, body, authorId, tagId) {
        let obj = {
            title: title,
            body: body,
            authorId: authorId,
            tagId: tagId
        }
        Article.create(obj)
            .then(() => {
                View.display("Succsessfully add article data")
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static read_one(id) {
        let obj = {
            where: {
                id: id
            }
        }
        Article.findOne(obj)
            .then(data => {
                View.display(data.dataValues);
            })
            .catch(err => {
                View.displayErr(err);
            })
    }

    static read_all() {
        Article.findAll()
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
        Article.update(obj, {where: {id: id}})
            .then(() => {
                View.display(`Sucsessfully updated data`)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static delete(id) {
        Article.destroy({where: {id: id}})
            .then(() => {
                View.display(`Sucsessfully deleted data`);
            })
            .catch(err => {
                View.displayErr(err);
            })
    }
}

module.exports = ArticleController