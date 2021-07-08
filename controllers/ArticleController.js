const Model  = require('../models')
const Sequelize = Model.Sequelize
const Op = Sequelize.Op;
const Table = require('cli-table');
const chalk = require('chalk')
const Article = Model.Articles
const View = require('../views/view')

class ArticleController {

    static add(params){
        let obj = {
            title: params[0],
            body: params[1],
            AuthorId: params[2],
            TagId: params[3]
        }
        Article.create(obj)
        .then(success =>{
            View.displaySuccess(`Berhasil menambahkan data`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static update(params){
        Article.update({[params[0]]:params[1]}, {
            where: { [params[2]]: params[3]} })
        .then(success=>{
            View.displaySuccess(`Data berhasil diupdate`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one (params){
        Article.findOne({
            where :{
                [params[0]]: params[1]
            }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'title', 'body', 'AuthorId', 'TagId', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10, 20, 20]
            });
            table.push(
            [success.dataValues.id, success.dataValues.title, success.dataValues.body, success.dataValues.AuthorId, success.dataValues.TagId, success.dataValues.createdAt, success.dataValues.updatedAt ]
            )   

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static read_all() {
        Article.findAll()
        .then(success=>{
            var table = new Table({
                head: ['id', 'title', 'body', 'AuthorId', 'TagId', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10, 20, 20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.title, x.dataValues.body, x.dataValues.AuthorId, x.dataValues.TagId, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static erase(params){
        Article.destroy({
            where:{
                [params[0]] : params[1]
            }
        })
        .then(success=>{
            console.log(success)
            View.displaySuccess(`Berhasil menghapus article `)
        })
        .catch(err=> {
            View.displayError(err)
        })
    }

    static findLike(params){
        Article.findAll({
            where:{
                [params[0]]: {
                    [Op.iLike] : `%${params[1]}%`
                }
            }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'title', 'body', 'AuthorId', 'TagId', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10, 20, 20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.title, x.dataValues.body, x.dataValues.AuthorId, x.dataValues.TagId, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
}
module.exports = ArticleController