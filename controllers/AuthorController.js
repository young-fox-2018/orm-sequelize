const Model = require("../models")
const Author = Model.Author
const View = require("../views/View.js")

class AuthorController{
    static add(options){
        let obj = {
            first_name: options[0],
            last_name: options[1],
            religion: options[2],
            gender: options[3],
            age: options[4]

        }
        Author.create(obj)
        .then(data=>{
            View.displayData(`Berhasil menambahkan data Author "${obj.first_name}"`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one(options){
        Author.findOne({
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
        Author.findAll({
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
        Author.findOne({
            where: {
              [options[2]]: options[3]
            }
        })
        .then(data=>{
            if(data){
                Author.update({
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
        Author.findOne({
            where: {
              [options[0]]: options[1]
            }
        })
        .then(data=>{
            if(data){
                Author.destroy({
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

module.exports = AuthorController