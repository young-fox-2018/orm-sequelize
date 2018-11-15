const Model = require("../models")
const Article = Model.Article
const View = require("../views/View.js")

class ArticleController{
    static add(options){
        let obj = {
            title: options[0],
            body: options[1],
            AuthorId: options[2],
            TagId: options[3]
        }
        Article.create(obj)
        .then(data=>{
            View.displayData(`Berhasil menambahkan data Article "${obj}"`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one(options){
        Article.findOne({
            where: {
              [options[0]]: options[1]
            }
        })
        .then(data=>{
            if(data){
                View.displayData(data.dataValues)
            } else {
                View.displayError("data tidak ditemukan")    
            }
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_all(options){
        Article.findAll({
            where: {
              [options[0]]: options[1]
            }
        })
        .then(data=>{
            if(data.length <= 0){
                View.displayError("data tidak ditemukan")    
            } else {
                data = data.map((e) => e.dataValues)
                View.displayData(data)
            }
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static update(options){
        Article.findOne({
            where: {
              [options[2]]: options[3]
            }
        })
        .then(data=>{
            if(data){
                Article.update({
                    [options[0]]: options[1],
                  }, {
                    where: {
                      [options[2]]:  options[3]
                    }
                  }
                )
                .then(data=>{
                    View.displayData("data berhasil diupdate")
                })
            } else {
                View.displayError("data tidak ditemukan")
                
            }
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static erase(options){
        Article.findOne({
            where: {
              [options[0]]: options[1]
            }
        })
        .then(data=>{
            if(data){
                Article.destroy({
                    where: {
                      [options[0]]: options[1]
                    }
                })
                .then(data=>{
                    View.displayData(`berhasil menghapus data ${options[0]} = ${options[1]}`)
                })
            } else {
                View.displayError("data tidak ditemukan")
            }
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
}

module.exports = ArticleController