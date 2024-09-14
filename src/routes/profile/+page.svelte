<script>
	let user = {
		name: 'Alex LeLoup',
		karma: 85,
		xp: 3659,
		lvl: 6,
		hp: 75,
		mana: 60,
		mental: 10,
		birthday: '1998-06-15',
		sex: 'M',
		work: 'Developer',
		marital: 'Single',
		classRole: 'Mage',
		equipment: ["Master's Degree", 'Professional Network', 'Advanced Coding Skills'],
		achievements: ['First Quest Complete', 'Level 5 Unlocked', 'Meditation Master'],
		attributes: ['Creative', 'Analytical', 'Empathetic'],
		profilePic: '/img.png'
	};

	function calculateLevel(xp) {
		return Math.floor(Math.cbrt(xp));
	}

	function calculateXpForNextLevel(level) {
		return (level + 1) ** 3;
	}

	let currentLevel = calculateLevel(user.xp);
	let nextLevel = currentLevel + 1;
	let xpForNextLevel = calculateXpForNextLevel(currentLevel);
	let xpNeeded = xpForNextLevel - user.xp;
	let progress = (user.xp / xpForNextLevel) * 100;
</script>

<div class="min-h-screen bg-black text-white p-6">
	<div class="flex flex-col items-center mb-8">
		<div class="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-600 mb-4">
			<img src={user.profilePic} alt="Profile Picture" class="w-full h-full object-cover" />
		</div>
		<h1 class="text-3xl font-bold text-indigo-500 animate-fade-in">{user.name} 🎮</h1>
		<p class="text-gray-400 mt-2">{user.classRole} | {user.work}</p>
		<p class="text-gray-400 mt-1">
			{user.sex} | {user.marital} | Âgé de {new Date().getFullYear() -
				new Date(user.birthday).getFullYear()} ans
		</p>
		<div class="w-full max-w-lg mx-auto">
			<div class="flex justify-between mb-2">
				<span class="text-white font-bold">Niveau : {currentLevel}</span>
				<span class="text-white"
					>XP : {user.xp} / {xpForNextLevel} (Prochain niveau : {nextLevel})</span
				>
			</div>
			<div class="w-full bg-gray-700 rounded-full h-4">
				<div
					class="bg-indigo-600 h-4 rounded-full"
					style="width: {progress}%; transition: width 0.3s ease-in-out;"
				></div>
			</div>
			<p class="text-gray-400 mt-2">Encore {xpNeeded} XP pour atteindre le niveau {nextLevel}.</p>
		</div>
	</div>

	<!-- METRICS Section -->
	<div class="grid grid-cols-2 gap-4 mb-8">
		<div class="bg-gray-800 p-4 rounded-md text-center animate-fade-in">
			<h2 class="text-xl font-bold">🧘 Karma</h2>
			<p class="text-2xl text-green-400 font-semibold">{user.karma}</p>
			<p class="text-gray-400 text-sm">(-100 to 100)</p>
		</div>
		<div class="bg-gray-800 p-4 rounded-md text-center animate-fade-in">
			<h2 class="text-xl font-bold">✨ XP</h2>
			<p class="text-2xl text-yellow-400 font-semibold">{user.xp}</p>
			<p class="text-gray-400 text-sm">Niveau : {currentLevel}</p>
			<p class="text-gray-400 text-sm">
				XP requis pour le prochain niveau : {(currentLevel + 1) ** 3}
			</p>
		</div>
		<div class="bg-gray-800 p-4 rounded-md text-center animate-fade-in">
			<h2 class="text-xl font-bold">💪 HP</h2>
			<p class="text-2xl text-red-400 font-semibold">{user.hp}</p>
			<p class="text-gray-400 text-sm">(0 = near death, 100 = olympic)</p>
		</div>
		<div class="bg-gray-800 p-4 rounded-md text-center animate-fade-in">
			<h2 class="text-xl font-bold">🔮 Mana</h2>
			<p class="text-2xl text-blue-400 font-semibold">{user.mana}</p>
			<p class="text-gray-400 text-sm">(Spiritual energy)</p>
		</div>
		<div class="bg-gray-800 p-4 rounded-md text-center animate-fade-in">
			<h2 class="text-xl font-bold">🧠 Mental</h2>
			<p class="text-2xl text-purple-400 font-semibold">{user.mental}</p>
			<p class="text-gray-400 text-sm">(0 = burnout, 13 = full of energy)</p>
		</div>
	</div>

	<div class="mb-8">
		<h2 class="text-2xl font-bold text-indigo-500 mb-4 animate-fade-in">
			Contexte & Situation Actuelle
		</h2>
		<p class="text-gray-400">
			🎂 <strong>Anniversaire :</strong>
			{user.birthday} ({new Date().getFullYear() - new Date(user.birthday).getFullYear()} ans)
		</p>
		<p class="text-gray-400">👔 <strong>Travail :</strong> {user.work}</p>
		<p class="text-gray-400">💍 <strong>État Civil :</strong> {user.marital}</p>
	</div>

	<div class="mb-8">
		<h2 class="text-2xl font-bold text-indigo-500 mb-4 animate-fade-in">🎒 Équipement</h2>
		<ul class="text-gray-400 space-y-2">
			{#each user.equipment as item}
				<li>📚 {item}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-8">
		<h2 class="text-2xl font-bold text-indigo-500 mb-4 animate-fade-in">🏆 Réalisations</h2>
		<ul class="text-gray-400 space-y-2">
			{#each user.achievements as achievement}
				<li>🎖️ {achievement}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-8">
		<h2 class="text-2xl font-bold text-indigo-500 mb-4 animate-fade-in">🔍 Attributs Découverts</h2>
		<ul class="text-gray-400 space-y-2">
			{#each user.attributes as attribute}
				<li>💡 {attribute}</li>
			{/each}
		</ul>
	</div>

	<div class="text-center">
		<a
			href="/edit-profile"
			class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
		>
			Modifier le Profil ✍️
		</a>
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

	.animate-fade-in {
		animation: fade-in 0.5s ease-in-out forwards;
	}
</style>
