import fs from 'fs';
import fetch from 'node-fetch';

export const fromSequelize = (file: string) => {
    // I will rewrite the code so it's better 
    // but read the file
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // write it to a javascript
        fs.writeFile('./temp/xxx.js', data, (err) => {
            if (err) throw err;
            // get your required file
            const Default = require('../../temp/xxx.js');
            console.log(Default.name);
            console.log(Default.attributes);
            // do our conversion, we have javascript, 
        });

    });

}

fromSequelize('./dist/testing/seq.schema.js');
