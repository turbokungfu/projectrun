<script>
	import { Popup } from './components/Popup.svelte'
	let showPopup = false
	import{setContext}from 'svelte'
	import Greet from "./components/Greet.svelte";
	const userName = 'Mike'
	setContext('username-context', userName)
</script>

<main>
	{#if showPopup}
	<Popup />
	{/if}
	<h1>hi</h1>
	<Greet name='Bruce'  heroName='sluppy'/>
	<Greet name='Clark'  heroName='turdydoodoo'/>
	<Greet name='Amia'   heroName='hottie'/>
	<Greet name='Princess'heroName='groggy'/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>