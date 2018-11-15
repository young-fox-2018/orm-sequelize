"use strict"

const Help = require('../Help')
const Model = require('../models/index')
const View = require('../views/View')
const Sequelize =  require('sequelize')

class Controller {
    static getHelp() {
        Help.printHelp()
    }

    static addAuthor(author) {
        let obj = {
           first_name : author[0],
           last_name : author[1],
           religion : author[2],
           gender : author[3],
           age : author[4],
           createdAt : new Date(),
           updatedAt : new Date()
        }

        Model.Author.create(obj)
            .then(data => {
                const result = data.dataValues
                View.printData(result)
            })
            .catch(err => {
               View.printError(err)
            }) 
    }

    static addAuthorWithInstance(author) {
        const task = new Model( {
            first_name : author[0],
            last_name : author[1],
            religion : author[2],
            gender : author[3],
            age : author[4],
            createdAt : new Date(),
            updatedAt : new Date()
        })

        task.save()
        .then(data => {
            View.printData(data)
        })
        .catch(err => {
            View.printError(err)
        })
    }

    static findOneAuthor(author) {
        let obj = {
            where : {
            id : author[0]
            }
        }

        Model.Author.findOne(obj)
            .then(data => {
                View.printData(data.dataValues)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static findAllAuthor() {
        Model.Author.findAll()
            .then(data => {
                const result = data.map(element => element.dataValues)
                View.printData(result)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static updateAuthor(author) {
        let objWhere = {
            where : {
                id: author[0]
            }
        }

        let objValue = {}
        objValue[author[1]] = author[2]

   
        Model.Author.update(objValue, objWhere)
            .then(result => {
                    View.printData(result)
                })
            .catch(err => {
                    View.printError(err)
            })
    }

    static deleteAuthor(author) {
        let obj = {
            where : {
                id: author[0]
            }
        }
   
        Model.Author.destroy(obj)
            .then(result => {
                    View.printData(result)
                })
            .catch(err => {
                    View.printError(err)
            })
    }

    

    static findLike(author) {
        let obj = {
            attributes :  ['first_name', 'last_name'],
            where: {
                [author[0]]: { [Model.sequelize.Op.like]: 'r%'},
                [author[1]]: {[Model.sequelize.Op.between] : [author[2], author[3]]},
                [author[4]]: {[Model.sequelize.Op.like] : 'a%'}

            }
        }

        Model.Author
         .findOne(obj)
         .then(data => {
             if (!data) {
                 View.printError('Data not found')
             } else {
                data = data.dataValues
                View.printData(data)
             }
           
         })
         .catch(err => {
            console.log(err)
         })
    }

    static addTag(tag) {
        let obj = {
           name : tag[0],
           createdAt : new Date(),
           updatedAt : new Date()
        }

        let tag = new Model()

        Model.Tags.create(obj)
            .then(data => {
                const result = data.dataValues
                View.printData(result)
            })
            .catch(err => {
               View.printError(err)
            }) 
    }

    static findOneTag(tag) {
        let obj = {
            where : {
            id : tag[0]
            }
        }

        Model.Tags.findOne(obj)
            .then(data => {
                View.printData(data.dataValues)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static findAllTags() {
        Model.Tags.findAll()
            .then(data => {
                const result = data.map(element => element.dataValues)
                View.printData(result)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static updateTag(tag) {
        let objWhere = {
            where : {
                id: tag[0]
            }
        }

    let objValue = {}
    objValue[tag[1]] = tag[2]

    Model.Tags.update(objValue, objWhere)
        .then(result => {
                View.printData(result)
            })
        .catch(err => {
                View.printError(err)
        })
    }

    static deleteTag(tag) {
        let obj = {
            where : {
                id: tag[0]
            }
        }

        Model.Tags.destroy(obj)
            .then(result => {
                    View.printData(result)
                })
            .catch(err => {
                    View.printError(err)
            })
    }

    static addArticle(article) {
        let obj = {
            title : article[0],
            body : article[1],
            AuthorId : article[2],
            TagId : article[3],
            createdAt : new Date(),
            updatedAt : new Date()
        }

        Model.Article.create(obj)
            .then(data => {
                const result = data.dataValues
                View.printData(result)
            })
            .catch(err => {
               View.printError(err)
            }) 
    }

    static findOneArticle(article) {
        let obj = {
            where : {
            id : article[0]
            }
        }

        Model.Article.findOne(obj)
            .then(data => {
                View.printData(data.dataValues)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static findAllArticles() {
        Model.Article.findAll()
            .then(data => {
                const result = data.map(element => element.dataValues)
                View.printData(result)
            })
            .catch(err => {
                View.printError(err)
            })
    }

    static updateArticle(article) {
        let objWhere = {
            where : {
                id: article[0]
            }
        }

    let objValue = {}
    objValue[article[1]] = article[2]

    Model.Article.update(objValue, objWhere)
        .then(result => {
                View.printData(result)
            })
        .catch(err => {
                View.printError(err)
        })
    }

    static deleteArticle(article) {
        let obj = {
            where : {
                id: article[0]
            }
        }

        Model.Article.destroy(obj)
            .then(result => {
                    View.printData(result)
                })
            .catch(err => {
                    View.printError(err)
            })
    }
}

module.exports = Controller