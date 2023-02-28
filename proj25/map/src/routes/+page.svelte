<Map :map bind:center zoom=11 />
<p>Center: {{center}}</p>
 
<script>
  import { Context } from 'svelte-google-maps'; 
  import Map from 'svelte-google-maps/Map.html';
 
  export default {
    components: { Map },
    data() {
      return {
        map: new Context('APIKEY'),
        center: { lat: 37.540725, lng: -77.436048 }
      }
    }
  }
</script> 


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>

</div>
