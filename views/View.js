class View {
    static displayError (err) {
        console.log('========== ERROR ==========')
        console.log(err)
        console.log('===========================')
        process.exit()
    }

    static displayMsg (data) {
        console.log(`\n\n\n`)
        console.log(`============ YOUR RESULT =====================`)
        console.log(data)
        console.log(`==============================================`)
        process.exit()
    }
}


module.exports = View