<script>
	let show = false;

	function swipe(node,params = {}) { // {delay: 500}
		let color = window.getComputedStyle(node).color; 
		return {
			...params,
			css(t) {
				// t: 0 -> 1
				// #1 0 -> 0.5 (grow the solid color, text is hidden)
				if (t < 0.5) {
					// t 0 -> 0.5
					// percentage 0 -> 100;
					const percentage = 200 * t;
					return `background: linear-gradient(to right,${color} 0, ${percentage}%,transparent ${percentage}%);
					color:transparent;`
				} else {
				// #2 0.5 -> 1 (shrink the solid color, text is revealed)
					// t  0.5 -> 1
					// percentage 0 -> 100
					const u = t - 0.5; // 0 -> 0.5
					const percentage = u * 200;

					return `background: linear-gradient(to right,transparent 0, ${percentage}%,${color} ${percentage}%);
					color: ${color}`


				}
			}
		}
	}
</script>

<div>
	<label>
		<input bind:checked = {show} type="checkbox" /> show
	</label>
</div>

{#if show}
<div>
	<span class="header" transition:swipe>Hello world</span>
</div>
<div>
	<span class="text" transition:swipe={{delay: 500}}>Custom Transitions</span>
</div>

{/if}

<style>
	span {
		font-size: 20px;
	}
	.header{
		color: #ff3e00;
	}
	.text{
		color: #1f5389;
	}
</style>
