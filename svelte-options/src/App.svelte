<script>
	import {onMount, setContext} from 'svelte'
import Component from "./Component.svelte";
let component;
// onMount(() => {
// 	console.log(component);
// 	component.name = 'bye'
// })

</script>

<Component bind:this = {component} />