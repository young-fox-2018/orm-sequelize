const { Author } = require("../models/index")
const View = require("../Views/view")


class authorController {
        static add(first_name, last_name, religion, gender, age) {
            Author.create({
                    first_name:first_name,
                    last_name:last_name,
                    religion:religion,
                    gender:gender,
                    age:age
                }) 
                .then(function(newAuthor){
                    View.printLine(`Successfully insert data to Author`)
                    process.exit()
                })
                .catch(function(err) {
                    View.printError(err)
                    process.exit()
                })
        }

        static readOne(firstName, lastName) {
            Author.findOne({
                where: {
                    first_namme: firstName, 
                    last_name: lastName
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

        static readAll () {
            Author.findAll()
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
            Author.update(param, {
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
            Author.destroy({
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
module.exports = authorController
