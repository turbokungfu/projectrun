<script>
	const formValues = {
		name: '',
	}
	function submitForm(event){
		event.preventDefault()
		console.log(formValues)
	}
	let count = 0
	function handleClick(){
		count++
	}
	const name = "fartypants"
	const channel = '<b>Mike</b?'
	const hack = `<a href="#" onclick="alert('you have been hacked')">Wina a prize!<a/>`
	const headingId = 'heading'
	const status = 'danger'
	const names = ['bruce', 'clark', 'Diane']
</script>

<main>
	<div>
		<pre>
			{JSON.stringify(formValues, null, 2)}
		</pre>
	</div>
	<form on:submit={submitForm}>
		<div>
			<label for="name">Name</label>
			<input type="text" name="" id="name" bind:value={formValues.name}>
		</div>
		<div>
			<button>Submit</button>
		</div>
	</form>


	<button on:click={()=> count++}>Count {count}</button>
	<button on:click={handleClick}>Count {count}</button>
	{#each names as hi, bye}
	<h2>{bye+1}{hi}</h2> 
	{/each}
	<h1>Hello {name}</h1>
	<h1>Hello {@html channel}</h1>
	<h1>Hello {@html hack}</h1>
	<h2 id={headingId}>This is a heading</h2>
	<h3 class="underline">whoa where's that line coming from</h3>
	<h2 class = {status}>STATUS</h2>
</main>

<style>
	input{
		display: inline-flex;
	}
	label{
		display: inline-flex;
	}

	.underline{
		text-decoration: underline;
	}

	.danger{
		color: #ff3e00;
	}
	.success{
		color: green;
	}
	main {
		/* text-align: center; */
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