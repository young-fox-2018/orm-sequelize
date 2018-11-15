const { Tag } = require('../models/index')
const View = require('../Views/View')


class ControllerTag {
    static addTag(newTag) {
        Tag.create(newTag)
            .then(tag => {
                View.showData(`Success add new Tag with id:${tag.id}`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readOne(id) {
        Tag.findOne({
            where: {
                id: id
            }
        })
            .then(tag => {
                View.showData(tag.dataValues)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readAll() {
        Tag.findAll()
            .then(tags => {
                View.showData(tags)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static update(id, updTag) {
        Tag.update(updTag, {
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
        Tag.destroy({
            where: {
                id: id
            }
        })
            .then(tag => {
                View.showData(`Data dengan id: ${id} berhasil di hapus!`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
}


module.exports = ControllerTag