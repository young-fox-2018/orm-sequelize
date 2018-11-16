class View {
    static help() {
        console.log(`==== documentation ============================`);
        console.log(`author add -> add<space> "data yang ingin dimasukkan"`);
        console.log(`author read_one -> read_one<space> "masukkan id author"`);
        console.log(`author read_all -> read_all`);
        console.log(`author update -> update<space> "masukkan data yang ingin di update dan idnya`);
        console.log(`author delete -> delete<space> "masukkan id author"`);
        console.log(`tag add -> add<space> "data yang ingin dimasukkan"`);
        console.log(`tag read_one -> read_one<space> "masukkan id tag"`);
        console.log(`tag read_all -> read_all`);
        console.log(`tag update -> update<space> "masukkan data yang ingin di update dan idnya"`);
        console.log(`tag delete -> delete<space> "masukkan id author"`);
        console.log(`article add -> add<space> "data yang ingin dimasukkan"`);
        console.log(`article read_one -> read_one<space> "masukkan id article"`);
        console.log(`article read_all -> read_all`);
        console.log(`article update -> update<space> "masukkan data yang ingin di update dan idnya"`);
        console.log(`article delete -> delete<space> "masukkan id author"`);        
    }

    static displaySuccess(msg) {
        console.log(msg);
    }

    static displayError(err) {
        console.log(err);
    }
    
    static displayData(data) {
        console.log(data);
    }
}

module.exports = View;