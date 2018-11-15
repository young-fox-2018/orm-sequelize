let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Authors
let Tag = Model.Tags
let View = require(`../View/View`)
let Table = require('cli-table');

class ControllerTag {
    static insert(options) {
        console.clear()
        if (options.length < 1) {
            View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
        } else {
            console.clear()
            Tag.create({
                Name: options[0]
            }).then((result) => {
                //TODO:
                View.viewData(`Insert berhasil with data ID: ${result.id}`)
            }).catch((err) => {
                View.viewError()
            });
        }
    }

    static read_one(id) {
        let arr = []
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
                arr.push(result.dataValues)
                this.makeTable(arr)
            }

        }).catch((err) => {
            console.clear()
            View.viewError(err)
        });
    }

    static read_all() {
        console.clear()
        Tag.findAll().then((result) => {
            this.makeTable(result.map(function (params) {
                return params.dataValues
            }))
        }).catch((err) => {
            View.viewError(err)
        });

    }

    static update(options,id) {
        console.clear()
        let newOptions = options.pop()
        console.log(options, id);
        
        if (options.length % 2 == 1) {
            View.viewError(`Data tidak lengkap`)
        } else {
            let obj = {}
            for (let i = 0; i < options.length; i += 2) {
                obj[`${options[i]}`] = options[i + 1]
            }

            if (options.length % 2 == 1) {
                View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
            } else {
                console.clear()
                Tag.update(obj, {
                    where: {
                        id: id
                    }
                }).then((result) => {
                    //TODO:
                    View.viewData(`Update berhasil with data ID: ${id}`)
                }).catch((err) => {
                    View.viewError(err)
                });
            }
        }
     }

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

    static makeTable(obj) {
        // instantiate
        let arr = obj
        var table = new Table({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });
        
        //MAKE HEADER
        let a = Object.keys(arr[0])
        table.push(a)
        for (let i = 0; i < arr.length; i++) {
            let arrTemp = []
            
            arrTemp.push(arr[i][`id`])
            arrTemp.push(arr[i][`Name`])
            arrTemp.push(arr[i][`createdAt`])
            arrTemp.push(arr[i][`updatedAt`])
            table.push(arrTemp)
            arrTemp = []
        }
        
        View.viewData(table.toString())
    }


}

module.exports = ControllerTag