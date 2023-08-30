import Component from './Component.js';

document.querySelector('#hydrate').addEventListener('click',() => {
    console.log('hydrate');
    const component = new Component({
        target: document.body,
        hydrate: true,
        props: {
            name: 'rajnish',
            language: 'svelte',
        },
    });
});

