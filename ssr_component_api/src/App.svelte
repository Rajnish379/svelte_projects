<script>
	import Component from './Component.svelte';
</script>

<Component on:product = {(event) => {
	console.log('product',event.detail);
}} />