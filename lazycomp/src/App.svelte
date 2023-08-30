<script>
// import Component from './Component.svelte';
const componentPromise = import('./Component.svelte'); // promise;
</script>

{#await componentPromise}
Loading...
{:then { default: Component }}

<Component foo = "123" bar = {456} />
{/await}

asdf
<!-- <Component foo = "123" bar = {456} /> -->