const svelteCompiler = require('svelte/compiler');
const fs = require('fs');
const path = require('path');

const pathToComponent = path.join(__dirname,'./src/Component.svelte');
const svelteCode = fs.readFileSync(pathToComponent,'utf-8');

const {js} = svelteCompiler.compile(svelteCode, {
    generate: 'ssr',
    hydratable: true,
    format: 'cjs',
});

const pathToSsrCode = path.join(__dirname,'component.ssr.js');
// fs.writeFileSync(pathToSsrCode,js.code,'utf-8');
const ssrComponent = require(pathToSsrCode).default;

const { head, html, css} = ssrComponent.render({
    name: 'rajnish',
    language: 'svelte',
});

const outputHtml = `
<html>
<head>${head}
<style>${css.code}</style>
</head>
<body>${html}<script type="module" src="./index.js"></script></body>
</html>
`

fs.writeFileSync(
path.join(__dirname, './public/index.html'),
outputHtml,
'utf8')

const {js: clientSideJs} = svelteCompiler.compile(svelteCode, {
    generate: 'dom',
    hydratable: true,
    css: false,
});

fs.writeFileSync(path.join(__dirname, './public/index.js'),clientSideJs.code,'utf-8');

