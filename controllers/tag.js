const View = require("../views/view")
const { Tag } = require("../models/index.js")

class ControllerTag {
    static addData(data) {
        Tag.create(data)
            .then(data => {
                View.displayAdd(data);
            })
            .catch(err => {
                view.displayErr(err);
            });

    }
    static readOne(value) {
        Tag.findOne({ where: { id: value } })
            .then(data => {
                View.displayfindOne(data)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }
    static readAll() {
        Tag.findAll()
            .then(data => {
                View.displayFindAll(data)
            })
            .catch(err => {
                view.displayErr(err)
            })
    }
    static updateData(data, id) {
        Tag.update(
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
        Tag.destroy({ where: { id: value } })
            .then(() => {
                View.displaydelete(value)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

}

module.exports = ControllerTag