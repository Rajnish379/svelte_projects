<script>
	export let name = 'world';
    // A component can only have only one svelte options tag
    // Hence to add multiple options for a component we need to use multiple attributes
	let obj = {
        name: 'rajnish',
        age: 'secret',
    };
    import {beforeUpdate,onMount} from 'svelte';

    onMount(() => {
        let intervalid = setInterval(() => {
            console.log(obj);
        },1000)
        return () => clearInterval(intervalid);
    })
    beforeUpdate(() => {
        console.log('beforeUpdate')
    })
</script>


<div>{name}</div>

<!-- If you make immutable as true, svelte trusts you that whatever is present inside the component body is immmutable even though they are mutating actually -->
<svelte:options namespace="html" accessors={true} immutable={true} />

<button on:click = {() => {
    // Even though the object remains the same the beforeUpdate's console log is still appearing 
    // It is because svelte treats all the functions and objects as though they are always changing even though there is no change in their value
    obj = {...obj,name: 'svelte'};
    // name = 'world';
}}>
Change name
</button>

{obj.name} is {obj.age} years old

