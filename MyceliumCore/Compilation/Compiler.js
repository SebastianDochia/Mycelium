const fs = require('fs');
const { exec } = require("child_process");

class Compiler {
    compileAndRun = async (input) => {
        return new Promise((resolve, reject) => {
            fs.writeFile("tmp/tmp.java", input, (err) => {
                if (err) {
                    return console.log(err);
                }

                const className = input.split(' ').filter(el => el != '')[1];

                exec(`cd tmp & javac tmp.java & java ${className}`, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        resolve(error);
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        resolve(stderr);
                    }
                    resolve(stdout);
                });
                

            });

            
        });

    }


}

module.exports = Compiler;