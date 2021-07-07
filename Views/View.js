const Table = require('cli-table');

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
        let header = Object.keys(data[0]);
        header = header.slice(0, header.length-2);
        let cols = [];
        if (header.length === 8) {
            cols = [4, 15, 15, 10, 10, 5];
        } else if (header.length === 7) {
            cols = [4, 15, 25, 10, 10];            
        } else if (header.length === 4) {
            cols = [4, 15];            
        }
        var table = new Table({
            head: header,
            colWidths: cols
        });        

        data.forEach(element => {            
            if (header.length === 6) {
                table.push([element[header[0]], element[header[1]], element[header[2]], element[header[3]], element[header[4]], element[header[5]]]);
            } else if (header.length === 5) {
                table.push([element[header[0]], element[header[1]], element[header[2]], element[header[3]], element[header[4]]]);
            } else if (header.length === 2) {
                table.push([element[header[0]], element[header[1]]]);
            }
        });        
        console.log(table.toString());
    }
}

module.exports = View;