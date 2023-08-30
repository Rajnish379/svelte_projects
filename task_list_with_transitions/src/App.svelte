<script>
	import {fade,blur,slide,fly,scale} from 'svelte/transition';
	import {bounceInOut,sineOut} from 'svelte/easing';
	const data = [
		{title: 'Hall', items: ['Sweep the floor', 'Mop the floor','Throw the rubbish']},
		{title: 'Kitchen',items: ['Wash the plates', 'Tidy the table', 'Boil the soup']},
		{title: 'Toilet',items: ['Brush the sink', 'Flush the toilet', 'Scrub the floors']},
	]
	let lists = [{show: true,items: [0,1]},{
		show: false, items: [0]}, {show: false,items:[0,1]}
	];
	let media = matchMedia('(prefers-reduced-motion: reduce)');
	let noAnimation = media.matches;

	media.onchange = (event) => {noAnimation = event.matches;};

	function t() {
		return {
			delay: 0
		}
	}

	$: niceFade = noAnimation ? t:fade;
</script>

<div class="container">
	{#each lists as list, i (i)}
	{#if list.show}
	<div transition:fade={{duration: 400}}
	on:introend = {() => {list.shown = true;}}
	on:outroend = {() => {list.shown = false;}}
	 class="list">
		<div class = "title">{data[i].title}</div>
		<button class="close" on:click = {() => list.show = false}>X</button>
		<ul class="items">
			{#each list.items as item , index (item)}
			<li in:fly = {{x:60,delay: list.shown ? 0: 400 + index * 300}} out:slide|local class="item" on:click = {() => {
				list.items = list.items.filter(i => i !== item); 
			}}>
			<span>{data[i].items[item]}</span>
            <span>X</span></li>
			{/each}
			{#if list.items.length !== 3}
			<li class = "add-items" on:click={() => {
				const potential = new Set([0,1,2]);
				list.item.forEach(item =>potential.delete(item));
				list.items.push(Array.from(potential)[0]);
				list.items = list.items
			}}>Add item</li>
			{/if}
		</ul>
	</div>
	{:else}
	<div class = "add-list" on:click = {() => list.show = true}>
	{/if}
	{/each}
</div>