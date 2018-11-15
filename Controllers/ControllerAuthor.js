const { Author } = require('../models/index')
const View = require('../Views/View')


class ControllerAuthor {
    static addAuthor(newAuthor) {
        Author.create(newAuthor)
            .then(author => {
                View.showData(`Success add new author with id:${author.id}`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readOne(id) {
        Author.findOne({
            where: {
                id: id
            }
        })
            .then(author => {
                View.showData(author.dataValues)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static readAll() {
        Author.findAll()
            .then(authors => {
                View.showData(authors)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static update(id, updAuthor) {
        Author.update(updAuthor, {
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
        Author.destroy({
            where: {
                id: id
            }
        })
            .then(author => {
                View.showData(`Data dengan id: ${id} berhasil di hapus!`)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }

}


module.exports = ControllerAuthor