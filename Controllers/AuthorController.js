const Model = require('../models');
const Author = Model.Author;
const View = require('../Views/View');

class AuthorController {
    static add(options) {
        Author.create({
            first_name: options[1],
            last_name: options[2],
            religion: options[3],
            gender: options[4],
            age: options[5]
        })
        .then((data) => {
            View.displaySuccess(`Author ${data.dataValues.first_name} ke dalam data author`);
            process.exit();
        })
        .catch((err) => {
            View.displayError(err);
        })
    }
    
    static read_one(options) {
        Author.findOne({where: {id: options[1]}})
        .then(data => {
            View.displayData(data.dataValues);
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static read_all() {
        Author.findAll()
        .then(data => {
            let listAuthor = data.map(author => author.dataValues);
            View.displayData(listAuthor);
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static update(options) {
        Author.update(
            {
                first_name: option[3]
            }, 
            {
                where: { id: option[1] }
            }
        )
        .then(() => {
            View.displaySuccess(`data with key ${options[1]} updated`);            
            process.exit();
        })
        .catch((err) => {
            View.displayError(err);
        });
    }

    static erase(options) {
        Tag.destroy({
            where: { id: options[1] }
        })
        .then((data) => {
            if(data === 0) {
                View.displayError(`data not found`);
            } else {
                View.displaySuccess(`data deleted`);
            }
            process.exit();
        })
        .catch((err) => {
            View.displayError(err);
        });
    }
}

module.exports = AuthorController;