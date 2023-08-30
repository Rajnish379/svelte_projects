<script>
	let name = 'world';
</script>

<input bind:value = {name} />

<div>
	{name}
</div>

<!-- This component is used when there are dynamic components to be written inside the head tag of a html file instead of a static constant -->
<svelte:head>
	<title>{name}</title>
	<meta name="description" content = "{name}" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
{@html `<style>:root {
	--font-color: ${name}
}
	
</style>`}
</svelte:head>

<style>
	div,input {
		font-family: 'Dancing Script', cursive;
		color: var(--font-color)
	}
</style>