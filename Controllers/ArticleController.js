const Model = require('../models');
const Article = Model.Article;
const View = require('../Views/View');

class ArticleController {
    static add(options) {
        Article.create({
            title: options[1],
            body: options[2],
            AuthorId: options[3],
            TagId: options[4]
        })
        .then((data) => {
            View.displaySuccess(`Article dengan title ${data.dataValues.title} ke dalam data Article`)
            process.exit();
        })
        .catch((err) => {
            View.displayError(err);
        })
    }

    static read_one(options) {
        Article.findOne({where: {id: options[1]}})
        .then(data => {
            View.displayData(data.dataValues);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static read_all() {
        Article.findAll()
        .then(articles => {
            let listArticles = articles.map( article => article.dataValues);
            View.displayData(listArticles);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static update(options) {
        let newDataArticle = {
            title: options[2],
            body: options[3],
            AuthorId: options[4],
            TagId: options[5]
        };

        Article.update(newDataArticle, 
            { where: { id: options[1] } }
        )
            .then(data => {
                View.displayData(`Data dengan id: ${options[1]} berhasil di update!`)
                process.exit()
            })
            .catch(err => {
                View.displayError(err)
            })
    }
    
    static erase(options) {
        Article.destroy({
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

module.exports = ArticleController;