const Model = require('../models');
const Tag = Model.Tag;
const View = require('../Views/View');

class TagController {
    static add(options) {
        Tag.create({
            name: options[1]
        })
        .then((data) => {
            View.displaySuccess(`berhasil menambahkan data ke dalam data Tag`);
            process.exit();
        })
        .catch((err) => {
            View.displayError(err);
        })
    }

    static read_one(options) {
        Tag.findOne({where: {id: options[1]}})
        .then(data => {
            View.displayData(data.dataValues);
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static read_all() {
        Tag.findAll()
        .then(tags => {            
            let listTag = tags.map(tag => tag.dataValues);
            View.displayData(listTag);
        })
        .catch(err => {
            View.displayError(err);
        })
    }
    
    static update(options) {
        let newTag = {
            name: options[2]
        };

        Tag.update(newTag, { where: { id: options[1] } })
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

module.exports = TagController;