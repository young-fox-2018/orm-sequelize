const View = require('../view.js')
const Model = require('../models')
const Author = Model.Author
const Article = Model.Article
const Tag = Model.tag


class Controller {
  static execute(table, command, data) {
    switch (table) {
      case "article":
        switch (command) {
          case "add":
            let objCreate = {
              title: data[0],
              body: data[1],
              AuthorId: data[2],
              TagId: data[3],
              createdAt: new Date,
              updatedAt: new Date
            }
            Article.create(objCreate)
              .then(function(data) {
                View.success(`berhasil menambah artikel ${data.dataValues.title}`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_one":
            Article.findOne({where:{id:data}})
              .then(function(data) {
                View.success(data.dataValues)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_all":
            Article.findAll()
              .then(function(data) {
                let allData = data.map(function(element){
                  return element.dataValues
                })
                View.success(allData)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "update":
            let objUpdate = {}
            objUpdate[data[1]]= data[2]
            Article.update(objUpdate, {where: {id: data[0]}})
              .then(function(data) {
                View.success(`berhasil update data`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break

          case "delete":
            Article.destroy({where:{id:data}})
            .then(function(data) {
              View.success(`berhasil menghapus data`)
            })
            .catch(function(err) {
              View.error(err)
            })
            break;

          default:

        }
        break;
      case "author":
        switch (command) {
          case "add":
            let objCreate = {
              first_name: data[0],
              last_name: data[1],
              religion: data[2],
              gender: data[3],
              age: data[4],
              createdAt: new Date,
              updatedAt: new Date
            }
            Author.create(objCreate)
              .then(function(data) {
                View.success(`berhasil menambah author ${data.dataValues.first_name}`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_one":
            Author.findOne({where:{id:data}})
              .then(function(data) {
                View.success(data.dataValues)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_all":
            Author.findAll()
              .then(function(data) {
                let allData = data.map(function(element){
                  return element.dataValues
                })
                View.success(allData)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "update":
            let objUpdate = {}
            objUpdate[data[1]]= data[2]
            Author.update(objUpdate, {where: {id: data[0]}})
              .then(function(data) {
                View.success(`berhasil update data`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break

          case "delete":
            Author.destroy({where:{id:data}})
            .then(function(data) {
              View.success(`berhasil menghapus data`)
            })
            .catch(function(err) {
              View.error(err)
            })
            break;

          default:
        }
        break;
      case "tag":
        switch (command) {
          case "add":
            let objCreate = {
              name: data[0],
              createdAt: new Date,
              updatedAt: new Date
            }
            Tag.create(objCreate)
              .then(function(data) {
                View.success(`berhasil menambah author ${data.dataValues.name}`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_one":
            Tag.findOne({where:{id:data}})
              .then(function(data) {
                View.success(data.dataValues)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "read_all":
            Tag.findAll()
              .then(function(data) {
                let allData = data.map(function(element){
                  return element.dataValues
                })
                View.success(allData)
              })
              .catch(function(err) {
                View.error(err)
              })
            break;

          case "update":
            let objUpdate = {}
            objUpdate[data[1]]= data[2]
            Tag.update(objUpdate, {where: {id: data[0]}})
              .then(function(data) {
                View.success(`berhasil update data`)
              })
              .catch(function(err) {
                View.error(err)
              })
            break

          case "delete":
            Tag.destroy({where:{id:data}})
            .then(function(data) {
              View.success(`berhasil menghapus data`)
            })
            .catch(function(err) {
              View.error(err)
            })
            break;

          default:
        }
        break;
      default:
        View.success(
          `
          author:
            add: menambah author baru
            read_one: menampilkan data author
            read_all: menampilkan semua data author
            update: mengubah data author
            erase: menghapus data author

          tag:
            add: menambah tag baru
            read_one: menampilkan data tag
            read_all: menampilkan semua data tag
            update: mengubah data tag
            erase: menghapus data tag

          article:
            add: menambah article baru
            read_one: menampilkan data article
            read_all: menampilkan semua data article
            update: mengubah data article
            erase: menghapus data article
          `
        )
    }
  }
}

module.exports = Controller