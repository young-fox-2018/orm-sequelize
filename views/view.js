class View {
    static displaySuccess(message){
        console.log(message)
        process.exit()
    }

    static displayError(err){
        console.log(err)
        process.exit()
    }

}

module.exports = View