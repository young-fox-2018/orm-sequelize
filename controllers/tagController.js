const Model = require('../models/index')
const View = require('../views/view')
class TagController {
    static add(name) {
        Model.Tag.create({
            name: name
        })
            .then(function (tag) {
                View.showData(`Data with tag ${tag.name} successfully registered`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findOne(value) {
        Model.Tag.findOne({
            where: {
                id: value
            }
        })
            .then(function (tag) {
                View.findOne(tag)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
            })
    }
    static findAll() {
        Model.Tag.findAll()
            .then(function (tags) {
                View.showFindAll(tags)
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
        Model.Tag.update(option, {
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
        Model.Tag.destroy({
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


module.exports = TagController