const Model = require('../models')
const View = require('../Views/View')
const Article = Model.Article

class ArticleController {
    static add(options){
        let obj = {
            title: options[0],
            body:options[1],
            AuthorId:options[2],
            TagId:options[3],
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Article.create(obj)
            .then((data) => {
                View.display({
                    data:data.dataValues,
                    msg:"1 row is created at Article"
                })
                process.exit()
            })
            .catch((err)=> {
                View.displayErr(err)
            })
        
    }
    static readone(options){
        if(options.length !== 1){
            View.display(`masukan id Article`)
        }else{
            let obj = {
                where:{
                    id:options[0]
                }
            }
            
            Article.findOne(obj)
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
        Article.findAll()
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
        Article.update(obj,{where:{
            id:options[2]
        }})
        .then((data) => {
            View.display(`success update data into Article`)
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
        Article.destroy(obj)
        .then((data)=>{
            View.display(`delete ${data} row from Article`)
            process.exit()
        })
        .catch((err)=>{
            View.displayErr(err)
        })
    }
}
module.exports = ArticleController