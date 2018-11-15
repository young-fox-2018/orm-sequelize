const View = require("../views/view")
const { Author } = require("../models/index.js")
// const { Article } = require("../models/index.js")
// const { Tag } = require("../models/index.js")

class ControllerAuthor {
    static addData(data) {
        Author.create(data)
            .then(data => {
                View.displayAdd(data);
            })
            .catch(err => {
                view.displayErr(err);
            });

    }
    static readOne(value) {
        Author.findOne({ where: { id: value } })
            .then(data => {
                View.displayfindOne(data)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }
    static readAll() {
        Author.findAll()
            .then(data => {
                View.displayFindAll(data)
            })
            .catch(err => {
                view.displayErr(err)
            })
    }
    static updateData(data, id) {
        Author.update(
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
        Author.destroy({ where: { id: value } })
            .then(() => {
                View.displaydelete(value)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

}

module.exports = ControllerAuthor