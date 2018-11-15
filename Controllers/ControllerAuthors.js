let Model = require(`../models`)
let Article = Model.Article
let Author = Model.Authors
let Tag = Model.Tags
let View = require(`../View/View`)
let Table = require('cli-table');

class ControllerAuthors {
    static insert(options) {
        console.clear()
        if (options.length < 5) {
            View.viewError(`DATA KURANG, YOUR INPUT DATA IS: ${options.length}`)
        } else {
            console.clear()
            Author.create({
                first_name: options[0],
                last_name: options[1],
                religion: options[2],
                gender: options[3],
                age: options[4]
            }).then((result) => {
                //TODO:
                View.viewData(`Insert berhasil with data ID: ${result.id}`)
            }).catch((err) => {
                View.viewError(err)
            });
        }
    }

    static read_one(id) {
        let arr = []
        console.clear()
        Author.findOne({
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
        Author.findAll().then((result) => {
            this.makeTable(result.map(function (params) {
                return params.dataValues
            }))
        }).catch((err) => {
            View.viewError(err)
        });
    }

    static update(options, id) {
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
                Author.update(obj, {
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
        Author.destroy({
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
            arrTemp.push(arr[i][`first_name`])
            arrTemp.push(arr[i][`last_name`])
            arrTemp.push(arr[i][`religion`])
            arrTemp.push(arr[i][`gender`])
            arrTemp.push(arr[i][`age`])
            arrTemp.push(arr[i][`createdAt`])
            arrTemp.push(arr[i][`updatedAt`])
            table.push(arrTemp)
            arrTemp = []
        }
        
        View.viewData(table.toString())
    }

}

module.exports = ControllerAuthors