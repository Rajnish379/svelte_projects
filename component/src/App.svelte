<script>
	import Foo from "./Foo.svelte";
	import Bar from "./Bar.svelte";

	let value = 0;
	const props = {
		a: 'a',
		b: 'b',
		c: 'c'
	}
	$: component = value > 200 ? null : value > 50 ? Foo: Bar
</script>

<input type="number" bind:value />

<!-- A special element in svelte starts with svelte: -->
<!-- This component is a component which is created based on the condition whether the value is greater than 50 or not
>50 Foo else Bar is rendered -->
<svelte:component this = {component} bind:value on:click {...props}/>

<!-- {#if value > 50}
<Foo bind:value on:click {...props}/>
{:else} 
<Bar bind:value on:click {...props}/>
{/if} -->
