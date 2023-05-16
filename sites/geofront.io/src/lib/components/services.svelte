<script lang="ts">
	import { page } from '$app/stores';
	import type { Config } from '$lib/interfaces';

	export let config: Config = $page.data.config;
</script>

<div class="justify-center space-x-2 space-y-4 text-center">
	<h3 class="font-bold">Our services</h3>
	<div class="grid md:grid-cols-4 gap-4">
		{#each config.services as service}
			<a class="flex-col cursor-pointer" href="/services/{service.id}">
				<p><i class="{service.icon} fa-4x" /></p>
				<p class="text-xl font-semibold p-2">{service.name}</p>
			</a>
		{/each}
	</div>
</div>
