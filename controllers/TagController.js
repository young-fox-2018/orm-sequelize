const Model  = require('../models')
const Tag = Model.Tag
const Table = require('cli-table');
const chalk = require('chalk')
const View = require('../views/view')

class TagController {

    static add(params){
        let obj = {
            name: params[0]
        }
        Tag.create(obj)
        .then(success =>{
            View.displaySuccess(`Berhasil menambahkan data`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static update(params){
        Tag.update({[params[0]]:params[1]}, {
            where: { [params[2]]: params[3]} })
        .then(success=>{
            View.displaySuccess(`Data berhasil diupdate`)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static read_one (params){
        Tag.findOne({
            where :{
                [params[0]]: params[1]
            }
        })
        .then(success=> {
            var table = new Table({
                head: ['id', 'name', 'created_at', 'updated_at']
              , colWidths: [5, 15, 20, 20]
            });
            table.push(
                [success.dataValues.id, success.dataValues.name, success.dataValues.createdAt, success.dataValues.updatedAt ]
                )   
            View.displaySuccess(chalk.blue.bgWhite(table.toString()))

        // console.log(chalk.blue.bgWhite(message))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static read_all() {
        Tag.findAll()
        .then(success=> {
            var table = new Table({
                head: ['id', 'name', 'created_at', 'updated_at']
              , colWidths: [5, 15, 20, 20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.name, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });
            View.displaySuccess(chalk.blue.bgWhite(table.toString()))

        // console.log(chalk.blue.bgWhite(message))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static erase(params){
        Tag.destroy({
            where:{
                [params[0]] : params[1]
            }
        })
        .then(success=>{
            console.log(success)
            View.displaySuccess(`Berhasil menghapus tag `)
        })
        .catch(err=> {
            View.displayError(err)
        })
    }
}
module.exports = TagController