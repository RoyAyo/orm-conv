import fs from 'fs';

const readJavascriptCodeFromFile = (file: string) => {
    // I will rewrite the code so it's better 
    // but read the file
    const data = fs.readFileSync(file, 'utf-8');
    // write to a temporary folder, use __dir
    fs.writeFileSync(`./temp/xxx.js`, data);

    // read file out.
    const Default = require('../../temp/xxx.js');
    console.log(Default);

    console.log(Default.default.name);
    console.log(Default.default.attributes);
    return Default.default;
}


export const fromORM = (file: string) => {

    const schema = readJavascriptCodeFromFile(file);

    // convert to JSON
    const standardSchema = {
        entity: schema.name,
        tables: schema.name,
        attributes: {
            // whatever
        }
    }
    console.log(standardSchema);
}

fromORM('./dist/testing/seq.schema.js');
