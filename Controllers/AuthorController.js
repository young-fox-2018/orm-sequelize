const Model = require('../models')
const View = require('../Views/View')
const Author = Model.Author

class AuthorController {
    static add(options){
        let obj = {
            first_name: options[0],
            last_name:options[1],
            religion:options[2],
            gender:options[3],
            age:options[4],
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Author.create(obj)
            .then((data) => {
                View.display({
                    data:data.dataValues,
                    msg:"1 row is created at Author"
                })
                process.exit()
            })
            .catch((err)=> {
                View.displayErr(err)
            })
        
    }
    static readone(options){
        if(options.length !== 1){
            View.display(`masukan id author`)
        }else{
            let obj = {
                where:{
                    id:options[0]
                }
            }
            
            Author.findOne(obj)
                .then((data) =>{
                    View.display(data.dataValues)
                    process.exit()
                })
                .catch((err)=> {
                    View.displayErr(err)
                })
        }
    }
    static readall(){
        Author.findAll()
        .then((data)=> {
            if(data === null){
                View.displayErr(`data not found`)
            }else{
                const result = data.map(element => element.dataValues)
                View.display(result)
                process.exit()
            }
        })
        .catch((err)=> {
            View.displayErr(err)
        })
    }
    static update(options){
        let obj = {
            [options[0]]:options[1]  
        }
        Author.update(obj,{where:{
            id:options[2]
        }})
        .then((data) => {
            View.display(`success update data into Author`)
            process.exit()
        })
        .catch((err) => {
            View.display(err)
        })

    }
    static delete(options){
        let obj = {
            where:{
                id:options[0]
            }
        }
        Author.destroy(obj)
        .then((data)=>{
            View.display(`delete ${data} row from Author`)
            process.exit()
        })
        .catch((err)=>{
            View.displayErr(err)
        })
    }
}
module.exports = AuthorController