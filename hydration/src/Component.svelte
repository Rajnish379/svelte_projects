<script>
    export let name;
    export let language;
</script>

<svelte:head>
    <meta name= "name" content=name>
    <title>{name}</title>
</svelte:head>

<h1>Hello {name}, I speak {language}</h1>

<label><input bind:value = {name} /></label>

<style>
    h1 {
        color: purple;
    }
</style>

