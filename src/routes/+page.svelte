<script>
	import { fade } from 'svelte/transition';
</script>

<div>
	<div class="fixed w-full h-screen bg-cover" style="background-image: url(/background.png)">
		<div
			class="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-slate-900/80 to-black/90"
		/>
	</div>

	<div class="absolute inset-0 flex flex-col h-screen px-6 overflor-auto">
		<div
			in:fade|global
			class="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mx-auto md:pt-20"
		></div>
	</div>
</div>
