class View {
    static displayErr(err) {
        console.log(err);
        process.exit()
    }

    static display(data) {
        console.log(data);
        process.exit()
    }
}

module.exports = View