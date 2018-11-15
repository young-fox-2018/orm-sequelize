const Model = require("../models")
const Tag = Model.Tag
const View = require("../views/View.js")

class TagController{
    static add(options){
        let obj = {
            name: options[0]
        }
        Tag.create(obj)
        .then(data=>{
            View.displayData(`Berhasil menambahkan data Tag "${obj.name}"`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one(options){
        Tag.findOne({
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
        Tag.findAll({
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
        Tag.findOne({
            where: {
              [options[2]]: options[3]
            }
        })
        .then(data=>{
            if(data){
                Tag.update({
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
        Tag.findOne({
            where: {
              [options[0]]: options[1]
            }
        })
        .then(data=>{
            if(data){
                Tag.destroy({
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

module.exports = TagController