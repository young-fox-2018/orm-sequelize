const Model = require('../models')
const Article = Model.Article
const View = require('../Views/View')

class articleController{
    
    static add(input){
        Article.create({
            title: input[0],
            body: input[1],
            AuthorId: input[2],
            TagId: input[3]
        })
         .then(() => {
             View.display(`Article ${input[0]} has been succesfully added to Articles`)
         })
    }

    static show(){
        Article.findAll()
         .then(data =>{
             let details = data.map(dataI => dataI.dataValues)
            View.display(details)
         })
         .catch(err =>{
             View.displayError(err)
         })
    }

    static find(input){
        Article.findByPk(Number(input))
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

        Article.update({ [key] : val }, {where: {"id": idUpd}})
        .then(() =>{
           View.display(`${key} has been successfully updated with ${val}`)
        })
        .catch(err =>{
            View.displayError(err)
        })
    }

    static delete(input){
        Article.destroy({ where:{"id" : input}})
         .then(() =>{
             View.display(`User ID: ${input} has been deleted from the table`)
         })
         .catch(err => {
             View.displayError(err)
         })
    }
}

module.exports = articleController