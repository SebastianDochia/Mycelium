const fs = require('fs');

class Compiler {
    compileAndRun = (input) => {
        return new Promise(() => {
            fs.writeFile("tmp/tmp.txt", input, (err) => {
                if(err) {
                    return console.log(err);
                }
            });
            
        });
    
    }
}

module.exports = Compiler;