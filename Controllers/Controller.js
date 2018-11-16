const View = require('../Views/View')
const authorController = require('./authorController')
const articleController = require('./articleController')
const tagController = require('./tagController')

class Controller{
    static execute(cmd, input){
        switch (cmd[0]) {
            case "author":
                if(cmd[1] === "add"){
                    authorController.add(input)
                }

                else if(cmd[1] === "read_one"){
                    authorController.find(input)
                }

                else if(cmd[1] === "findTeens"){
                    authorController.findTeens(input)
                }

                else if(cmd[1] === "read_all"){
                    authorController.show()
                }

                else if(cmd[1] === "update"){
                    authorController.update(input)
                }

                else if(cmd[1] === "delete"){
                    authorController.delete(input)
                }
                break;
        

            case "article":
                if(cmd[1] === "add"){
                    articleController.add(input)
                }

                else if(cmd[1] === "read_one"){
                    articleController.find(input)
                }

                else if(cmd[1] === "findExpress"){
                    articleController.findExpress(input)
                }

                else if(cmd[1] === "read_all"){
                    articleController.show()
                }

                else if(cmd[1] === "update"){
                    articleController.update(input)
                }

                else if(cmd[1] === "delete"){
                    articleController.delete(input)
                }
                break;
                
            case "tag":
                if(cmd[1] === "add"){
                    tagController.add(input)
                }

                else if(cmd[1] === "read_one"){
                    tagController.find(input)
                }

                else if(cmd[1] === "read_all"){
                    tagController.show()
                }

                else if(cmd[1] === "update"){
                    tagController.update(input)
                }

                else if(cmd[1] === "delete"){
                    tagController.delete(input)
                }
                break;

            default: View.help()
                break;
        }
    }
}

module.exports = Controller