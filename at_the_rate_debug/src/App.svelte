<script>
	let array = [
		{value:1},
		{value:2},
		{value:3},
	]; 
	let value = '';
	$: double = value + value
</script>

<input bind:value />
<!-- {@debug double} -->

{#each array as item, index}
{#if index === 1}
{@debug item}
{/if} 
<li>
	<input type="number" bind:value = {item.value} />
</li>
{/each}

