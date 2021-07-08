const Model  = require('../models')
const Author = Model.Authors
const Sequelize = Model.Sequelize
const Op = Sequelize.Op;
const Table = require('cli-table');
const chalk = require('chalk')
const View = require('../views/view')


class AuthorController {
    static add(params){
        let obj = {
            first_name: params[0],
            last_name: params[1],
            religion: params[2],
            gender: params[3],
            age: params[4]
        }
        Author.create(obj)
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
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10, 10, 20, 20]
            });
            table.push(
                [success.dataValues.id, success.dataValues.first_name, success.dataValues.last_name, success.dataValues.religion, success.dataValues.gender, success.dataValues.age, success.dataValues.createdAt, success.dataValues.updatedAt ]
                )  
            View.displaySuccess(chalk.blue.bgWhite(table.toString()))

        // console.log(chalk.blue.bgWhite(message))
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static read_all() {
        Author.findAll()
        .then(success=>{
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10, 10, 20, 20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.first_name, x.dataValues.last_name, x.dataValues.religion, x.dataValues.gender, x.dataValues.age, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
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

    static findMale(){
        Author.findAll({
            where:{
                gender : "male"
            }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10,10,20,20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.first_name, x.dataValues.last_name, x.dataValues.religion, x.dataValues.gender, x.dataValues.age, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
    }
    static findSenior(){
        Author.findAll({
            where:{
                age : {
                    [Op.gte] : 25
                }
            }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10,10,20,20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.first_name, x.dataValues.last_name, x.dataValues.religion, x.dataValues.gender, x.dataValues.age, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
    }
    static findJunior(){
        Author.findAll({
            where:{
                age : {
                    [Op.lt] : 25
                }
            }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10,10,20,20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.first_name, x.dataValues.last_name, x.dataValues.religion, x.dataValues.gender, x.dataValues.age, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
    }

    static findReligion(){
        Author.findAll({
            where: {
                [Op.or]: [{religion: "kristen"}, {religion: "islam"}]
              }
        })
        .then(success=>{
            var table = new Table({
                head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age', 'created_at', 'updated_at']
              , colWidths: [5, 15, 15, 10, 10,10,20,20]
            });
            success.forEach(x => { 
                table.push(
                [x.dataValues.id, x.dataValues.first_name, x.dataValues.last_name, x.dataValues.religion, x.dataValues.gender, x.dataValues.age, x.dataValues.createdAt, x.dataValues.updatedAt ]
                )       
            });

            View.displaySuccess(chalk.blue.bgWhite(table.toString()))
        })
    }
    
}

module.exports = AuthorController