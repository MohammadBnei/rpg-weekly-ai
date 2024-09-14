<script>
	let user = {
		name: 'Alex',
		level: 5,
		status: 'Explorateur',
		progress: 65,
		nextGoal: 'Répondre à 3 questions'
	};
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center p-6">
	<div class="w-full max-w-md text-center mb-6 animate-fade-in">
		<h1
			class="text-2xl font-bold transition-transform transform hover:scale-105 duration-300 ease-in-out"
		>
			Bienvenue, {user.name}!
		</h1>
		<p class="text-gray-400">Statut actuel : {user.status}</p>
		<p class="text-gray-400">Niveau : {user.level}</p>
	</div>
	<div class="w-full max-w-md mb-6">
		<div class="relative pt-1">
			<div class="flex mb-2 items-center justify-between">
				<div>
					<span
						class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 animate-slide-in"
					>
						Progression
					</span>
				</div>
				<div class="text-right">
					<span class="text-xs font-semibold inline-block text-white">
						{user.progress}%
					</span>
				</div>
			</div>
			<div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-800">
				<div
					style="width: {user.progress}%"
					class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500 ease-in-out"
				></div>
			</div>
		</div>
	</div>
	<div class="w-full max-w-md text-center mb-6 animate-fade-in">
		<h2
			class="text-xl font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out"
		>
			Prochain Objectif
		</h2>
		<p class="text-gray-400">{user.nextGoal}</p>
	</div>

	<div class="w-full max-w-md mb-6">
		<a
			href="/mentor"
			class="block w-full text-center bg-indigo-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
		>
			Accéder au Mentor IA
		</a>
	</div>

	<div class="w-full max-w-md text-center animate-fade-in">
		<h2 class="text-lg font-semibold mb-3">Dernières Interactions</h2>
		<ul class="space-y-2 text-gray-400">
			<li class="hover:text-white transition-colors duration-300 ease-in-out">
				✔️ Question 1 : Répondue avec succès
			</li>
			<li class="hover:text-white transition-colors duration-300 ease-in-out">
				✔️ Question 2 : En cours de traitement
			</li>
			<li class="hover:text-white transition-colors duration-300 ease-in-out">
				⏳ Question 3 : En attente de réponse
			</li>
		</ul>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(-100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.5s ease-in-out forwards;
	}

	.animate-slide-in {
		animation: slide-in 0.6s ease-in-out forwards;
	}
</style>
