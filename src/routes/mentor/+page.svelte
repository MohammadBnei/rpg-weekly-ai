<script>
	export let formData = {
		form: {
			answer: "OK, C'est bien noté ! Et sinon, quelles sont vos coordonnées de chevalier ?",
			elems: [
				{ name: 'age', type: 'number', placeholder: 'Votre âge', title: 'Âge', required: true },
				{
					name: 'birthdate',
					type: 'date',
					placeholder: 'Date de naissance',
					title: 'Date de Naissance',
					required: true
				},
				{
					name: 'comment',
					type: 'textarea',
					placeholder: 'Votre commentaire',
					title: 'Commentaire',
					required: false
				},
				{
					name: 'file',
					type: 'file',
					placeholder: 'Télécharger un fichier',
					title: 'Fichier',
					required: false
				}
			]
		}
	};

	let formValues = {};

	function handleSubmit(event) {
		event.preventDefault();
		console.log('Formulaire soumis:', formValues);
	}
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center p-6">
	<h1 class="text-2xl font-bold mb-6 animate-fade-in">Mentor IA</h1>

	<div class="flex items-start space-x-3 max-w-lg mx-auto mb-4 animate-fade-in">
		<div
			class="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold"
		>
			🤖
		</div>

		<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-lg">
			<p>{formData.form.answer}</p>
		</div>
	</div>

	<form on:submit={handleSubmit} class="space-y-6 w-full max-w-lg">
		{#each formData.form.elems as elem}
			<div class="flex flex-col animate-fade-in">
				<label for={elem.name} class="text-gray-300 mb-2 text-sm">{elem.title}</label>

				{#if elem.type === 'textarea'}
					<textarea
						id={elem.name}
						name={elem.name}
						placeholder={elem.placeholder}
						bind:value={formValues[elem.name]}
						required={elem.required}
						class="bg-black text-white border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
					></textarea>
				{:else if elem.type === 'file'}
					<input
						id={elem.name}
						name={elem.name}
						type="file"
						bind:files={formValues[elem.name]}
						required={elem.required}
						class="bg-black text-white border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
					/>
				{:else}
					<input
						id={elem.name}
						name={elem.name}
						type={elem.type}
						placeholder={elem.placeholder}
						bind:value={formValues[elem.name]}
						required={elem.required}
						class="bg-black text-white border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
					/>
				{/if}
			</div>
		{/each}

		<button
			type="submit"
			class="w-full bg-indigo-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
		>
			Soumettre
		</button>
	</form>
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
