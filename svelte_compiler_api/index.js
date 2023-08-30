const svelteCompiler = require('svelte/compiler');
const fs = require('fs');
const path = require('path');
// We need to remove the option of type: 'module' from package.json file so that we can run the javascript file using 'node index.js' command
const pathToComponent = path.join(__dirname,'./src/Component.svelte');
const svelteCode = fs.readFileSync(pathToComponent,'utf-8')

const processedCode = svelteCompiler.preprocess(svelteCode,[{
    // markup,
    // style,
    script: ({content,attributes}) => {
        return {
            code: content.replace('%%NAME%%',JSON.stringify(attributes.name)),
            dependencies: []
        };
    }
}])

// const processedCode = svelteCode.replace('%%NAME%%','"HELLO WORLD"')
processedCode.then(value => {
    const {js} = svelteCompiler.compile(value.code,{
        format: 'cjs',
        dev: false,
        sveltePath: 'xxx',
        css: false,
        cssHash: ({hash, css}) => 'xyz' + hash(css)
    });

    fs.writeFileSync(path.join(__dirname,'./output.js'),js.code,'utf8');


})



// fs.writeFileSync(path.join(__dirname,'./output.css'),css.code,'utf8');

