// require('svelte/register')



const fs = require('fs');
const svelteCompiler = require('svelte/compiler');
require('./register');


const Component = require('./Component.svelte').default

console.log(Component.render().html)

require.extensions['.env'] = function(module,filename) {
    const content = fs.readFileSync(filename,'utf-8');
    const obj = {};
    content.split('\n').forEach(line => {
        const [key,value] = line.split('=');
        obj[key] = value;
    });
 return module._compile(`module.exports = ${JSON.stringify(obj)};`,filename);

    // module.exports = {secret_a: 'xxx'. secret_b = 'yyy'}
}

const envVariables = require('./dev.env');
console.log('envVariables',envVariables);