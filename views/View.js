class View{
    static displayError(err){
        console.log(err)
        process.exit()
    }
    
    static displayData(data){
        console.log(data)
        process.exit()
    } 

    static displayHelp(){
        console.log("help")
        process.exit()
    }
}

module.exports = View