<script>
	import Map,{mapValue} from './Map.svelte';
	//import {mapValue} from './mapStore';
</script>

<input bind:value={$mapValue} type="number" />


<Map />

<Map />