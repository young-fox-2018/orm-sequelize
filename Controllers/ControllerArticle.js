let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Author
let Tag = Model.Tag
let View = require(`../View/View`)

class ControllerArticle {
    //TODO:
    static insert(options) {
        console.clear()
        if (options.length < 4) {
            View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
        } else {
            console.clear()
            Article.create({
                title: options[0],
                body: options[1],
                AuthorId: options[2],
                TagId: options[3],
                createdAt: new Date(),
                updatedAt: new Date()
            }).then((result) => {
                //TODO:
                View.viewData(`Insert berhasil with data ID: ${result.id}`)
            }).catch((err) => {
                View.viewError()
            });
        }
    }

    static read_one(id) {
        console.clear()
        Article.findOne({
            where: {
                id: id
            }
        }).then((result) => {
            console.clear()
            if (result == null) {
                View.viewData(`DATA TIDAK ADA`)
            } else {
                View.viewData(result.dataValues)
            }

        }).catch((err) => {
            console.clear()
            View.viewError(err)
        });
    }

    static read_all() {
        console.clear()
        Article.findAll().then((result) => {
            View.viewData(result.map(function (params) {
                return params.dataValues
            }))
        }).catch((err) => {
            View.viewError(err)
        });
    }

    //TODO:
    static update(options) {
        console.clear()
        Article.update({
            title: "test",
            body: "test",
        }, {
                where: {
                    id: 1
                }
            }).then((a, b) => {
                console.log(a, b);

            }).catch((err) => {
                console.log(err);
            });
    }

    static delete(id) {
        console.clear()
        Article.destroy({
            where: {
                id: id
            }
        }).then((result) => {
            if (result == 1) {
                View.viewData(`Success delete data with status: ${result}`)
            } else {
                View.viewData(`Failed delete data with status: ${result}`)
            }
        }).catch((err) => {
            View.viewError(err)
        });
    }
}

module.exports = ControllerArticle