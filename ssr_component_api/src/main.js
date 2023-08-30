// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

// export default app;

import Component from './Component.svelte';

const {css, head,html} = Component.render({
    a: 5,
    b: 10,
    title: 'this is server side rendering component api'
}, {
    context: new Map([['c',20]])
});

console.log(head)

document.querySelector('pre').innerText = `
<html>
    <head>
       ${head}
       <style>${css.code}</style>
    </head>
    <body>${html}</body>
</html>`;