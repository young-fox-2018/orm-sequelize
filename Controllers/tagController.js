const Model = require('../models')
const Tag = Model.Tag
const View = require('../Views/View')

class tagController{
    
    static add(input){
        Tag.create({
            name: input[0]
        })
         .then(() => {
             View.display(`Tag ${input[1]} has been succesfully added to Tags`)
         })
    }

    static show(){
        Tag.findAll()
        .then(data =>{
            let details = data.map(dataI => dataI.dataValues)
            View.display(details)
        })
        .catch(err =>{
            View.displayError(err)
        })
    }

    static find(input){
        Tag.findByPk(Number(input))
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

        Tag.update({ [key] : val }, {where: {["id"]: idUpd}})
        .then(() =>{
           View.display(`${key} has been successfully updated with ${val}`)
        })
        .catch(err =>{
            View.displayError(err)
        })
    }

    static delete(input){
        Tag.destroy({ where:{"id" : input}})
         .then(() =>{
             View.display(`Tag ID: ${input} has been deleted from the table`)
         })
         .catch(err => {
             View.displayError(err)
         })
    }
}

module.exports = tagController