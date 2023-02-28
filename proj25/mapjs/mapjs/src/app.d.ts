// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '@beyonk/svelte-googlemaps'{
	import { GoogleMap, GooglePlacesAutocomplete } from '@beyonk/svelte-googlemaps'
	export { GoogleMap, GooglePlacesAutocomplete };
}

declare module 'svelte-google-maps' {
	import { Context, Map, Marker } from 'svelte-google-maps';
  
	export { Context, Map, Marker };
  }

export {};
