import sveltePreprocess from 'svelte-preprocess';
import dotenv from 'dotenv';
import path from 'path';
import { UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

dotenv.config();

const config: UserConfig = {
  preprocess: sveltePreprocess(),
  plugins: [svelte()],
  env: {
    $env: path.resolve(__dirname, 'path/to/env/files'),
  },
};

export default config;