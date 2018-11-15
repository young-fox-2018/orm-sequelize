// const Tag = require('./TagController')
// const Author = require('./AuthorController')
const Model = require('../models/index')
const Author = Model.Author
const View = require('../View')
const Tag = Model.Tag
const Article = Model.Article


class Controller{

  static help() {
    View.display(`
    === documentation ========================-- \n
    author add -> add<space> "data yang ingin dimasukkan" \n
    author read_one -> read_one<space> "masukkan id author" \n 
    author read_all -> read_all \n 
    author update -> update<space> "masukkan data yang ingin di update dan idnya" \n
    author delete -> delete<space> "masukkan id author" \n
    tag add -> add<space> "data yang ingin dimasukkan" \n
    tag read_one -> read_one<space> "masukkan id tag" \n 
    tag read_all -> read_all \n 
    tag update -> update<space> "masukkan data yang ingin di update dan idnya" \n
    tag delete -> delete<space> "masukkan id author" \n
    article add -> add<space> "data yang ingin dimasukkan" \n
    article read_one -> read_one<space> "masukkan id article" \n 
    article read_all -> read_all \n 
    article update -> update<space> "masukkan data yang ingin di update dan idnya" \n
    artcle delete -> delete<space> "masukkan id author" \n
    `)
  }
  //Success add data into table
  static add(input) {
    if(input[0] === "author"){
      if(input.length !== 7){
        View.display(`Error please input correct data!`)
      } else {
        let obj = {
          first_name:input[2],
          last_name: input[3],
          religion: input[4],
          gender: input[5],
          age: input[6], 
          createdAt: new Date(), 
          updatedAt: new Date()
        }
        Author.create(obj)
          .then(data =>{
            View.display(`Succes adding data into ${input[0]}` , data.dataValues)
          })
          .catch(err => {
            View.display(`Error in adding data` , err)
          })
      }
    } else if(input[0] === "article"){
      if(input.length !== 6){
        View.display(`Error please input correct data!`)
      } else {
        let obj = {
          title:input[2],
          body: input[3],
          AuthorId: input[4],
          TagId: input[5],
          createdAt: new Date(), 
          updatedAt: new Date()
        }
        Article.create(obj)
          .then(data =>{
            View.display(`Succes adding data into ${input[0]}` , data.dataValues)
          })
          .catch(err => {
            View.display(`Error in adding data` , err)
          })
      }
    } else if(input[0] === "tag") {
      if(input.length !== 3 ){
        View.display(`Error please input correct data!`)
      } else {
        let obj = {
          name:input[2],
          createdAt: new Date(), 
          updatedAt: new Date()
        }
        Tag.create(obj)
          .then(data =>{
            View.display(`Succes adding data into ${input[0]}` , data.dataValues)
          })
          .catch(err => {
            View.display(`Error in adding data` , err)
          })
      }
    } else {
      View.display(`Error no such table`)
    }
    
  }
  // Success read all
  static show(input) {

    let table = input[0]
    
    if(table === "tag"){
      Tag.findAll()
    .then(data => {
      if(data == null){
        View.display(`Data not found!`)
      } else {
        const result = data.map(element => element.dataValues)
        View.display(result)
      }
    })
    .catch(err => {
      View.display(`Err in read all data` , err)
    })

    } else if (table == "author"){
      Author.findAll()
      .then(data => {
        if(data == null){
          View.display(`Data not found!`)
        } else {
          const result =data.map(element => element.dataValues)
          View.display(result)
        }
      })
      .catch(err => {
        View.display(`Err in read all data` , err)
      })
    } else if(table == "article") {
      Article.findAll()
      .then(data => {
        if(data == null){
          View.display(`Data not found!`)
        } else {
          const result =data.map(element => element.dataValues)
          View.display(result)
        }
      })
      .catch(err => {
        View.display(`Err in read all data` , err)
      })
    }else {
      View.display(`Error : no such table!`)
    }
  }
  // SUCCESS read_one
  static find(input) {

    if(input.length == 3) {
      if(input[0] == "author"){
        Author.findOne({id: input[2]})
          .then(data => {
            View.display(`Success finding data :` , data.dataValues)
          })
          .catch(err => {
            View.display(`Error in finding data : ` , err)
          })
      } else if(input[0] == "article"){
        Article.findOne({id: input[2]})
        .then(data => {
          View.display(`Success finding data :` , data.dataValues)
        })
        .catch(err => {
          View.display(`Error in finding data : ` , err)
        })
      } else if(input[0] == "tag") {
        Tag.findOne({id: input[2]})
        .then(data => {
          View.display(`Success finding data :` , data.dataValues)
        })
        .catch(err => {
          View.display(`Error in finding data : ` , err)
        })
      } else {
        View.display(`There is no such table!`)
      }
    } else {
      View.display(`Error please input correct data!`)
    }
  }

  static update(input) {

  }
}

module.exports = Controller