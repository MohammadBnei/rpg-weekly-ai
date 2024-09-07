<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="w-full min-h-screen">
	<Header />
	<slot />
	<Footer />
</div>
