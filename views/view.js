
class View {
    static showErr(err) {
        console.log(err)
    }
    static showData(input) {
        console.log(input)
    }
    static showFindAll(input) {
        let arr = []
        input.forEach(function (row) {
            arr.push(row.dataValues)
        })
        console.table(arr)
    }
    static findOne(input) {
        let arr = []
        arr.push(input.dataValues)
        console.table(arr)
    }


}

module.exports = View