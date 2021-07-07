const ArticleController = require('../Controllers/ArticleController');
const AuthorController = require('../Controllers/AuthorController');
const TagController = require('../Controllers/TagController');
const View = require('../Views/View');

class Controller {
    static execute(args) {
        if (args.length === 0) {
            View.help();
        } else {
            const database = args[0];
            const command = args.slice(1);
            // console.log(database, command)
            switch (database) {
                case 'author': 
                    if (command[0] === 'read_all'){
                        AuthorController.read_all();
                    } else if (command[0] === 'read_one'){
                        AuthorController.read_one(command);
                    } else if (command[0] === 'add'){
                        AuthorController.add(command);
                    } else if (command[0] === 'update') {
                        AuthorController.update(command);
                    } else if (command[0] === 'delete') {
                        AuthorController.erase(command);
                    }        
                    break;        

                case 'tag': 
                    if (command[0] === 'read_all') {
                        TagController.read_all();
                    } else if (command[0] === 'read_one') {
                        TagController.read_one(command);
                    } else if (command[0] === 'add'){
                        TagController.add(command);
                    } else if (command[0] === 'update') {
                        TagController.update(command);
                    } else if (command[0] === 'delete') {
                        TagController.erase(command);
                    }  
                    break;

                case 'article': 
                    if (command[0] === 'read_all') {
                        ArticleController.read_all();
                    } else if (command[0] === 'read_one') {
                        ArticleController.read_one(command[1]);
                    }  else if (command[0] === 'add'){
                        ArticleController.add(command);
                    } else if (command[0] === 'update') {
                        ArticleController.update(command);
                    } else if (command[0] === 'delete') {
                        ArticleController.erase(command);
                    }  
                break;
                default: break;
            }
        }
    }
}

module.exports = Controller;