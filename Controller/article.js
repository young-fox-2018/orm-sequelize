
const Model = require("../models");
const Article = Model.Article;
const View = require("../View/view")

class ArticleController {
    static addDataArticle(options) {
        if(options[0] === "Article") {
            let objArticle = {
                title: options[1],
                body: options[2],
                AuthorId: options[3],
                TagId: options[4],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            Article.create(objArticle)
            .then(data => {
                View.displayCreate(`Successfully added ${data.dataValues.title}`)
                process.exit()
            }).catch(err => {
                View.displayCreate(err)
            })
        } 
    }

    static readOneArticle(options) {
        if(options[0] === "Article") {
            Article.findOne({
                where: {
                    id : options[1]
                }
            }).then(data => {
                // console.log(data)
                View.displayResult(data.dataValues);
                process.exit()
            })
        }
    }

    static findAllArticle(options) {
        if(options[0] === "Article") {
            Article.findAll()
            .then(data => {
                let dataArticle = data.map(element => {
                    return element.dataValues
                  })
                View.displayAll(dataArticle);

                process.exit();
            }).catch(err => {
                View.displayAll(err);
            })
        }
    }

    static updateArticle(options) {
        if(options[0] === "Article") {
            let updateObj = {
                [options[2]] : options[3]
            }
            Article.update(updateObj, {
                where: {
                    id : options[1]
                }
            }).then(data => {
                View.displayUpdate(`success updated Article data!`)
                process.exit()
            }).catch(err => {
                View.displayUpdate(err)
            })
        }
    }

    static deleteArticle(options) {
        if(options[0] === "Article") {
            Article.destroy({
                where: {
                    id: options[1]
                }
            }).then(data => {
                View.displayDestroyed("Successfully deleted Article!")
                process.exit()
            }).catch(err => {
                View.displayDestroyed(err)
            })
        }
    }
    
}

module.exports = ArticleController