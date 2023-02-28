

<script>
  import { GoogleMap, GooglePlacesAutocomplete } from '@beyonk/svelte-googlemaps'
  
  const apikey = import.meta.env.VITE_API_KEY
</script> 

<div>
  <GooglePlacesAutocomplete bind:apiKey={apikey} />
  <GoogleMap bind:apiKey={apikey} />
</div>