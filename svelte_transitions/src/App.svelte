<script>
	const data = [**]
	let lists = [{show:true,items:[0,1]}, {
		show:false,items: [0] }, {show: false,items: [0,1]}
	];
</script>

<div class="container">
	{#each lists as list, i (i)}
	{#if list.show}
	<div class="list">
		<div class="title">{data[i].title}</div>
		<button class="close" on:click = {() => 
		list.show = false}>X</button>
		<ul class="items">
			{#each list.items as item (item)}
			<li class="item" on:click = {() => {
				list.items = list.items.filter(i => i !== item);
			}}>
			<span>{data[i].items[item]}</span>
			<span>X</span></li>
		{/each}
		{#if list.items.length !==3}
			<li class="add-item" on:click = {() => }
		
		</ul>
	</div>
</div>