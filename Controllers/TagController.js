const Model = require('../models')
const View = require('../Views/View')
const Tag = Model.Tag

class TagController {
    static add(options){
        let obj = {
            name: options[0],
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Tag.create(obj)
            .then((data) => {
                View.display({
                    data:data.dataValues,
                    msg:"1 row is created at Tag"
                })
                process.exit()
            })
            .catch((err)=> {
                View.displayErr(err)
            })
        
    }
    static readone(options){
        if(options.length !== 1){
            View.display(`masukan id Tag`)
        }else{
            let obj = {
                where:{
                    id:options[0]
                }
            }
            
            Tag.findOne(obj)
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
        Tag.findAll()
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
        Tag.update(obj,{where:{
            id:options[2]
        }})
        .then((data) => {
            View.display(`success update data into Tag`)
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
        Tag.destroy(obj)
        .then((data)=>{
            View.display(`delete ${data} row from Tag`)
            process.exit()
        })
        .catch((err)=>{
            View.displayErr(err)
        })
    }
}
module.exports = TagController