const View = require("../views/view")
const { Article } = require("../models/index.js")


class ControllerArticle {
    static addData(data) {
        Article.create(data)
            .then(data => {
                View.displayAdd(data);
            })
            .catch(err => {
                view.displayErr(err);
            });

    }
    static readOne(value) {
        Article.findOne({ where: { id: value } })
            .then(data => {
                View.displayfindOne(data)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }
    static readAll() {
        Article.findAll()
            .then(data => {
                View.displayFindAll(data)
            })
            .catch(err => {
                view.displayErr(err)
            })
    }
    static updateData(data, id) {
        Article.update(
            data, {
                where: { id: id }
            }).then(data => {
                if (data[0] === 1) {
                    View.displayUpdate(id)
                }
                else {
                    View.displayErr("Your data not found")
                }
            })
            .catch(err => {
                view.displayErr(err)
            })
    }
    static delete(value) {
        Article.destroy({ where: { id: value } })
            .then(() => {
                View.displaydelete(value)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

}

module.exports = ControllerArticle