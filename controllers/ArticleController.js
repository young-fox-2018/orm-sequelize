const Model  = require('../models')
const AuthorModel = Model.Authors

class Article {

    static add(params){
        let obj = {
            first_name: params[0],
            last_name: params[1],
            religion: params[2],
            gender: params[3],
            age: params[4]
        }
        Article.create(obj)
        .then(success =>{
            View.displaySuccess(`Berhasil menambahkan data ${obj.first_name}`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static update(params){
        Author.update({[params[0]]:params[1]}, {
            where: { [params[2]]: params[3]} })
        .then(success=>{
            View.displaySuccess(`Data berhasil diupdate`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one (params){
        Author.findOne({
            where :{
                [params[0]]: params[1]
            }
        })
        .then(success=> {
            View.displaySuccess(success.dataValues)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static read_all() {
        Author.findAll()
        .then(success=>{
            let data = success.map(x => x.dataValues)
            View.displaySuccess(data)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static erase(params){
        Author.destroy({
            where:{
                [params[0]] : params[1]
            }
        })
        .then(success=>{
            console.log(success)
            View.displaySuccess(`Berhasil menghapus author `)
        })
        .catch(err=> {
            View.displayError(err)
        })
    }
}
module.exports = Article