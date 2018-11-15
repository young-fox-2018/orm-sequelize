const { Article } = require("../models/index")
const View = require("../Views/view")

class articleController {
    static add(title, body, tag_id, author_id) {
        const article  = new Article({
            title: title,
            body:body,
            TagId:tag_id,
            AuthorId:author_id
        })
        article.save()
            .then(function(data) {
                View.printLine(`Successfully save new article`)
            })
            .catch(function(err) {
                View.printError(err)
            })
    }

    static readOne(title) {
        Article.findOne({
            where: {
                title: title
            }
        })
            .then(function(data) {
                if (data) {
                    View.printLine(data.dataValues)
                    process.exit()
                } else {
                    View.printError("data not found")
                    process.exit()
                }
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })

    }

    static readAll () {
        Article.findAll()
            .then(function(many_data) {
                many_data.forEach(data => {
                    View.printLine(data.dataValues)
                });
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })

    }

    static erase (id) {
        Article.destroy({
            where : {
                id : id
            }
        })
            .then(function(data) {
                if (data == 0) {
                    View.printLine(`ID not found`)
                } else {
                    View.printLine(`Successfuly deleted data with id ${id}`)
                }
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })
    }
}

module.exports = articleController


