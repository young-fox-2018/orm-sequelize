const { Tag } = require("../models/index")
const View = require("../Views/view")

class tagController {
    static add(name) {
        Tag.create({
                name:name,
            }) 
            .then(function(newTag){
                View.printLine(`Successfully insert new Tag`)
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })
    }
    static readOne(name) {
        Tag.findOne({
            where: {
                name: name 
            }
        })
            .then(function(data) {
                if (data) {
                    View.printLine(data.dataValues)
                } else {
                    View.printError("data not found")
                }
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })

    }
    static readAll() {
        Tag.findAll()
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

    static update(id, option) {
        let param = {}
        for (let i = 0; i < option.length; i+=2) {
            param[option[i]] = option[i+1]
        }
        Tag.update(param, {
                where: {
                    id:id
                }
            })
            .then(function(data) {
                if (data[0] == 0) {
                    View.printError(`Id not found`)
                } else {
                    View.printLine(`Successfully updated data with id ${id}`)
                } 
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })
    }

    static erase (id) {
        Tag.destroy({
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

module.exports = tagController