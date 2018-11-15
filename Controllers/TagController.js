const View = require('../Views/View')
const Model = require('../models') 
const Tag = Model.Tag

class TagController {

    static add (option) {
        Tag.create({
            name: option[1]
        })
        .then((data) => {
            View.successDisplay(`berhasil menambahkan ${data.dataValues.first_name} ke dalam data Tag`)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static readOne (option) {
        Tag.findOne({
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
        Tag.findAll()
        .then((data) => {
            View.successDisplay(data)
            process.exit()
        })
        .catch((err) => {
            View.errDisplay(err)
        })
    }

    static update (option) {
        //masih proses
        // Tag.update({
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
        Tag.destroy({
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

module.exports = TagController 