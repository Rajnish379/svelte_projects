
<!-- The custom properties defined follow inheritance i.e., if the prop is defined inside the parent component then it's child can access it too -->
<button style = "background-color: var(--button-color,red);
color: var(--text-color,white)">
    <slot />
</button>
<button style = "background-color: var(--button-color,red);
color: var(--text-color,white)">
    <slot />
   
</button>
