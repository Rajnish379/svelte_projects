<script>

	let show = false;

	function flipboard(node) {
		const text = node.textContent.trim();
		const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		
		let lastTime = 0;
		return  {
			duration: 5000,
			tick(t) {
			  	if(t === 1) {
					node.textContent = text;
					return;
				}
				const currentTime = Date.now();
				if (currentTime - lastTime < 100) {
					return;
				}
				lastTime = currentTime;


				// t = 0.1
				// aXX----


				//  t = 0.5
				/// abcdefg
				//  abcdxx-
				let str = '';

				for (let i = 0;i<text.length;i++) {
					const j = i / text.length;
					if ( j < t ) {
						str += text[i];
					} else if ( j < t * 1.5) {
						str += randomCharacter();
					} else {
						str += '-';
					}
				}
				node.textContent = str;
			}
		}

		function randomCharacter() {
			return randomChars[Math.floor(Math.random() * randomChars.length)];
		}
	}
</script>

<div>
	<label>
		<input bind:checked={show} type = "checkbox" /> Show
	</label>
</div>

{#if show}
	<div>
		<span transition:flipboard class="header">Hello World</span>
	</div>
	<div>
		<span transition:flipboard class="text">Custom Transitions</span>
	</div>
{/if}

<style>
	span {
		/* All monospace font characters have the same width */
		font-size: 20px;
		font-family: monospace;
	}
	.header {
		color: red;
	}
	.text {
		color: blue;
	}
</style>