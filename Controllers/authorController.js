const Model = require('../models')
const Author = Model.Author
const View = require('../Views/View')

class authorController{

    static add(input){
        Author.create({
            first_name: input[0],
            last_name: input[1],
            religion: input[2],
            gender: input[3],
            age: input[4]
        })
         .then(() => {
             View.display(`Data ${input[0]} ${input[1]} has been succesfully added to Authors`)
         })
    }

    static show(){
        Author.findAll()
         .then(data =>{
             let details = data.map(dataI => dataI.dataValues)
            View.display(details)
         })
         .catch(err =>{
             View.displayError(err)
         })
    }

    static find(input){
        Author.findByPk(Number(input))
         .then(data =>{
             View.display(data.dataValues)
         })
         .catch(err =>{
             View.displayError(err)
         })
    }

    static update(input){
        let idUpd = input[0]
        let key = input[1]
        let val = input[2]

        Author.update({ [key] : val }, {where: {["id"]: idUpd}})
        .then(() =>{
           View.display(`${key} has been successfully updated with ${val}`)
        })
        .catch(err =>{
            View.displayError(err)
        })
    }

    static delete(input){
        Author.destroy({ where:{"id" : input}})
         .then(() =>{
             View.display(`User ID: ${input} has been deleted from the table`)
         })
         .catch(err => {
             View.displayError(err)
         })
    }
}

module.exports = authorController