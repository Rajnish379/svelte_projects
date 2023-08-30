<script context = "module">
    import {writable} from 'svelte/store';
    export const mapValue = writable(1)

    let currentMap;
    // This count is shared across all the instances of map component as it is defined inside the module script
    let count = writable(1); 
</script>

<script>
    //import {mapValue} from './mapStore';
    //import {currentMap, setCurrentMap} from './mapData';

    let div;

    function setMe() {
        setCurrentMap(div)
    }

    function whosSet() {
        console.log(currentMap)
    }
</script>

<div bind:this = {div}>
{$mapValue}


<button on:click = {setMe}>Set Me</button>
<button on:click = {whosSet}>Who's set?</button>
</div>

{$count}

<button on:click = {() => $count++}> increment </button>
