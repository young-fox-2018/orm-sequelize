const Model = require('../models')
const Tag = Model.tag
const View = require('../views/View')

class TagController {
    static add(tag) {
        let obj = {
            where: {tags: tag}
        }
        Tag.create(obj)
            .then(() => {
                View.display("Succsessfully add tag data")
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static read_one(id) {
        let obj = {
            id: id
        }
        Tag.findOne(obj)
            .then(data => {
                View.display(data.dataValues);
            })
            .catch(err => {
                View.displayErr(err);
            })
    }

    static read_all() {
        Tag.findAll()
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
        Tag.update(obj, {where: {id: id}})
            .then(() => {
                View.display(`Sucsessfully updated data`)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static delete(id) {
        Tag.destroy({where: {id: id}})
            .then(() => {
                View.display(`Sucsessfully deleted data`);
            })
            .catch(err => {
                View.displayErr(err);
            })
    }
}

module.exports = TagController