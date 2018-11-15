class View {

    static showError(input) {
        console.log(`Error:\n${input}`)
    }

    static showData(input) {
        console.log(`==== Your Result ====================`)
        console.log(input)
        console.log(`==== Your Result ====================`)
    }

    static showMsg(input) {
        console.log(input)
    }

}

module.exports = View