let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Authors
let Tag = Model.Tags
let View = require(`../View/View`)

class ControllerTag{
    static insert(options) { 
        console.clear()
        if (options.length < 1) {
            View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
        } else {
            console.clear()
            Tag.create({
                title: options[0],
                body: options[1],
                AuthorId: options[2],
                TagId: options[3],
                createdAt: new Date(),
                updatedAt: new Date()
            }).then((result) => {
                //TODO:
                View.viewData(`Insert berhasil with data ID: ${result.id}`)
            }).catch((err) => {
                View.viewError()
            });
        }
    }
    
    static read_one(id) {
        console.clear()
        Tag.findOne({
            where: {
                id: id
            }
        }).then((result) => {
            console.clear()
            if (result == null) {
                View.viewData(`DATA TIDAK ADA`)
            } else {
                View.viewData(result.dataValues)
            }

        }).catch((err) => {
            console.clear()
            View.viewError(err)
        });
     }
    
    static read_all() { 
        console.clear()
        Tag.findAll().then((result) => {
            View.viewData(result.map(function (params) {
                return params.dataValues
            }))
        }).catch((err) => {
            View.viewError(err)
        });

    }
    
    static update() { }
    
    static delete() { 
        console.clear()
        Tag.destroy({
            where: {
                id: id
            }
        }).then((result) => {
            if (result == 1) {
                View.viewData(`Success delete data with status: ${result}`)
            } else {
                View.viewData(`Failed delete data with status: ${result}`)
            }
        }).catch((err) => {
            View.viewError(err)
        });
    }
    

}

module.exports = ControllerTag