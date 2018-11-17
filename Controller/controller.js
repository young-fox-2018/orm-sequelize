
const Model = require("../models");
const Author = Model.Author;
const Article = Model.Article;
const View = require("../View/view")
const Tag = Model.Tag;

class Controller {
    static addData(options) {
    if(options[0] === "Author") {
        let objCreate = {
            first_name: options[1],
            last_name: options[2],
            religion: options[3],
            gender: options[4],
            age: options[5],
            createdAt: new Date(),
            updatedAt: new Date()
        }
            Author.create(objCreate)
            .then(data => {
                View.displayCreate(`Successfully added ${data.dataValues.first_name}`)
                process.exit()
            }).catch(err => {
                View.displayCreate(err)
            })
        } 
        // else if (options[0] === "Article") {
        //     // console.log("masuk article")
        // }
    }

    static readOne(options) {
        if(options[0] === "Author") {
            Author.findOne({
                where: {
                    id: options[1]
                }
            }).then(data => {
                // console.log(data)
                View.displayAuthor(data.dataValues)
                process.exit()
            }).catch(err => {
                View.displayAuthor(err)
            })
        }
    }

    static readAll(options) {
        if(options[0] === "Author") {
            // console.log("masuk kah?")
            Author.findAll()
            .then(data => {
                let dataAuthor = data.map(element => {
                    return element.dataValues
                  })
                View.displayAllAuthor(dataAuthor);

                process.exit();
            }).catch(err => {
                View.displayAllAuthor(err);
            })
        }
    }

    static updateData(options) {
        if(options[0] === "Author") {
            let updateObj = {
                [options[2]] : options[3]
            }
            Author.update(updateObj, {
                where: {
                    id : options[1]
                }
            }).then(data => {
                View.displayUpdate(`success updated data!`)
                process.exit()
            }).catch(err => {
                View.displayUpdate(err)
            })
        }
    }

    static deleteData(options) {
        if(options[0] === "Author") {
            Author.destroy({
                where: {
                    id: options[1]
                }
            }).then(data => {
                View.displayDestroyed("Successfully deleted data!")
                process.exit()
            }).catch(err => {
                View.displayDestroyed(err)
            })
        }
    }
}

module.exports = Controller