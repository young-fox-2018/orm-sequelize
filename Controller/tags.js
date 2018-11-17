
const Model = require("../models");
const Tags = Model.Tag;
const View = require("../View/view")


class TagsController {

    static addTags(options) {
        if(options[0] === "Tags") {
            let objTags = {
                name: options[1],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            Tags.create(objTags)
            .then(data => {
                View.displayCreate(`Successfully added ${data.dataValues.name} tag!`)
                process.exit()
            }).catch(err => {
                View.displayCreate(err)
            })

        }
    }

    static readOneTags(options) {
        if(options[0] === "Tags") {
            Tags.findOne({
                where: {
                    id : options[1]
                }
            }).then(data => {
                View.displayResult(data.dataValues);
                process.exit()
            })
        }
    }

    static readAllTags(options) {
        if(options[0] === "Tags") {
            Tags.findAll()
            .then(data => {
                let dataTags = data.map(element => {
                    return element.dataValues
                  })
                View.displayAll(dataTags);

                process.exit();
            }).catch(err => {
                View.displayAll(err);
            })
        }
    }

    static updateTags(options) {
        if(options[0] === "Tags") {
            let updateObj = {
                [options[2]] : options[3]
            }
            Tags.update(updateObj, {
                where: {
                    id : options[1]
                }
            }).then(data => {
                View.displayUpdate(`success updated Tag!`)
                process.exit()
            }).catch(err => {
                View.displayUpdate(err)
            })
        }
    }

    static deleteTags(options) {
        if(options[0] === "Tags") {
            Tags.destroy({
                where: {
                    id: options[1]
                }
            }).then(data => {
                View.displayDestroyed("Successfully deleted Tag!")
                process.exit()
            }).catch(err => {
                View.displayDestroyed(err)
            })
        }
    }
}

module.exports = TagsController