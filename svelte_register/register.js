require.extensions['.svelte'] = function(module,filename) {
    const content = fs.readFileSync(filename,'utf-8');
    const {js} = svelteCompiler.compile(content, {
        generate: 'ssr',
        format: 'cjs'
    });
    return module._compile(js.code,filename);
    // module.exports = {secret_a: 'xxx'. secret_b = 'yyy'}
}