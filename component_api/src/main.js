// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

// export default app;

import Component from './Component.svelte';

const component = new Component({
	target: document.body,
	// Anchor makes the component get inserted right before the footer element
	// If it is null then that means that we will be inserting the component at the end of the list
	anchor: document.querySelector('footer'),
	props: {
		a: 5,
		b: 10
	},
	context: new Map([['c',20]]),
	intro: true
});

document.querySelector('#random').addEventListener('click', function() {
	component.$set({
		a: Math.floor(Math.random() * 100),
		b: Math.floor(Math.random() * 100)
	})
} );

document.querySelector('#reset').addEventListener('click', function() {
	component.reset();
} );

document.querySelector('#destroy').addEventListener('click', function() {
	component.$destroy();
}); 

component.$on('product',(event) => {
	console.log('product event',event.detail)
})

