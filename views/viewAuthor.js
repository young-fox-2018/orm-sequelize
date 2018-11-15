const cTable = require('console.table');
class View {
    static showData(data) {
        console.log(data)
    }
    static showErr(err) {
        console.log(err)
    }
    static showTables(data) {
        console.table(`======RESULT======`, data)
    }
    static showAll(data) {
        data.forEach(datum => {
            this.showTables(datum.dataValues)
        });
    }
}

module.exports = View