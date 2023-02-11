<script>
    import {getContext}from 'svelte'
    export let name
    export let heroName
    const userName = getContext('username-context')
</script>

<h2>Hello {name} AKA {heroName}</h2>