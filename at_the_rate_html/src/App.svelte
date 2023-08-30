<script>
	import {onDestroy,tick} from 'svelte';
	let html = `<b>this is a bold text</b><button id="xyz">Click Me</button>`


	function onClick(event) {
		console.log(event.target.id);
	}
	let div;


	onDestroy(() => {
		div.querySelectorAll('button').forEach(btn => btn.removeEventListener('click',onClick
		));
	})

	$: html, attachButtonListener();

	async function attachButtonListener() {
		
		if(div) {
			div.querySelectorAll('button').forEach(btn => btn.removeEventListener('click',onClick));

		}

		await tick();


		div.querySelectorAll('button').forEach(btn => btn.addEventListener('click',onClick));
		document.querySelectorAll('button[data-special="rajnish"]').forEach(btn => 
		btn.addEventListener('click',onClick))

	}


	// function innerHtml(node,html) {
	// 	node.innerHTML = html;

	// 	return {
	// 		update(html) {
	// 			node.innerHTML = html;
	// 		}
	// 	}
	// }

</script>

<textarea bind:value = {html} cols = "40" rows = "4" />

<div bind:this = {div}>
  {@html html}
  <button/>

</div>

{@html html.replaceAll('<button','<button data-special="rajnish"')}
