class View {
    static displayAdd(data) {
        console.log("Successfully add data with ID: " + data.id);

    }
    static displayfindOne(data) {
        console.log("your data :" + "\n")
        console.log(data.dataValues)

    }
    static displayFindAll(Alldata) {
        Alldata.forEach(data => {
            console.log(data.dataValues);
        });

    }
    static displayUpdate(data) {
        console.log("Successfully update data with ID: " + data);
    }
    static displaydelete(data) {
        console.log("Successfully delete dataupdate with ID: " + data);
    }
    static displayErr(err) {
        console.log(err);
    }
}

module.exports = View
