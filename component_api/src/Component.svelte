<script>
    import {createEventDispatcher} from 'svelte';
    import {getContext} from 'svelte';
    import {fade} from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let a = 1;
    export let b = 1;

    export function reset() {
        a = 1;
        b = 1;
    }
    $: product = a * b;
    $: dispatch('product',{product,a,b})

    const c = getContext('c');
    let d = true;
</script> 

<input type ="checkbox" bind:checked = {d} />

<!-- The transition is not applied when the component is mounted for the first time -->
<!-- {#if d} -->
<div transition:fade style = "display:grid; grid-template-columns: 10px 230px; align-items: center; gap: 5px;">
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
<!-- {/if} -->

C: {c}

<style>

</style>
