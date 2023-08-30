<script>
	import Button from './Button.svelte'
	let color = 'green';
</script>

<input type="color" bind:value={color}/>
<div style="display: grid;grid-template-columns: 1fr 1fr 1fr; display: contents; --button-color: yellow; --text-color: black;">

<Button buttonColor = "red">
	Red Button
</Button>
<Button buttonColor = "blue">
	Blue Button
</Button>
<!-- Span creates the component inline whereas wrapping the component inside a div block places it in a new line  -->
<!-- By setting the display:contents we are telling react dom that we should not consider the div while doing the layouts. We are telling only to consider the contents while doing layout -->
<!-- Custom props cannot be spreaded -->
<div style="display:contents; --button-color: {color}; --text-color: white">
<Button >
	Yellow Button
</Button>
</div>

<!-- Sugar syntax for above div -->
	<Button --button-color={color} --text-color="white" >
		Yellow Button
	</Button>

</div>
<!-- If there are any button elements inside the div of this component and any of the other child components inside it, then this style will be applied to them -->
