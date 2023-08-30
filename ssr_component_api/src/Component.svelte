<script>
    import {createEventDispatcher} from 'svelte';
    import {getContext} from 'svelte';
    import { get } from 'svelte/store';
    import {fade} from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let a = 1;
    export let b = 1;
    export let title = 'xxx';
    $: product = a * b;
    $: dispatch('product',product)

    const c = getContext('c');

   
</script> 

<svelte:head>
    <title>{title}</title>
    <meta name="keywords" content = "HTML,CSS,JavaScript"> 
</svelte:head>


<div style = "display:grid; grid-template-columns: 10px 230px; align-items: center; gap: 5px;">
    <div style = "grid-column: 2 / 3;">
        <button on:click = {() => a-=5}>-</button>
        <input type = "number" bind:value= {a} />
        <button on:click = {() => a+=5}>+</button>
    </div>
    <div>
        X
    </div>
    <div>
        <button on:click = {() => b-=5}>-</button>
        <input type = "number" bind:value= {b} />
        <button on:click = {() => b+=5}>+</button>
    </div>
    <div>=</div>
    <div style="text-align:right;">{product}</div>
</div>

c: {c}

<style>
    input, button {
		margin: 0;
	}

</style>
