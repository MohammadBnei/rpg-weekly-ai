<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="min-h-screen bg-black text-white flex flex-col">
	<header class="bg-indigo-600 text-white p-4">
		<div class="container mx-auto flex justify-between items-center">
			<a
				href="/"
				class="text-2xl font-bold hover:scale-105 transition-transform duration-300 ease-in-out s-7IPF32Wcq3s8 bg-black p-3 rounded-md"
			>
				<span class="text-indigo-500">Reel</span><span class="text-white">Play</span>
			</a>
			<nav class="space-x-4">
				<a href="/" class="hover:text-gray-300 transition-colors duration-300 ease-in-out"
					>Accueil</a
				>
				<a href="/mentor" class="hover:text-gray-300 transition-colors duration-300 ease-in-out"
					>Mentor IA</a
				>
				<a href="/profile" class="hover:text-gray-300 transition-colors duration-300 ease-in-out"
					>Profil</a
				>
			</nav>
		</div>
	</header>

	<main class="flex-grow container mx-auto p-6">
		<slot></slot>
	</main>

	<footer class="bg-gray-800 text-gray-400 p-4 text-center">
		<p>&copy; 2024 ReelPlay. Tous droits réservés.</p>
		<div class="space-x-4 mt-2">
			<a href="/terms" class="hover:text-white transition-colors duration-300 ease-in-out"
				>Conditions d'utilisation</a
			>
			<a href="/privacy" class="hover:text-white transition-colors duration-300 ease-in-out"
				>Politique de confidentialité</a
			>
		</div>
	</footer>
</div>

<style>
	.container {
		max-width: 1200px;
	}
</style>
