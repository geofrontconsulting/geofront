<script lang="ts">
	import { page } from '$app/stores';
	import type { Config } from '$lib/interfaces';
	import { Avatar } from '@skeletonlabs/skeleton';

	let config: Config = $page.data.config;
</script>

<div class="p-4 space-y-10">
	<h3 class="text-center font-bold">Our team</h3>
	<div class="flex items-center justify-center">
		<div class="grid md:grid-cols-2 gap-4">
			{#each config.teams as team}
				<div class="flex items-center justify-center">
					<Avatar src={team.photo} width="w-48" rounded="rounded-full" />
					<div class="flex-col">
						<p class="text-xl font-bold p-2">{team.name}</p>
						<p class="p-2">{team.description}</p>
						<div class="flex">
							<a class="p-2" href={team.github}><i class="fa-brands fa-github fa-xl" /></a>
							<a class="p-2" href={team.linkedin}><i class="fa-brands fa-linkedin fa-xl" /></a>
							<a class="p-2" href={team.twitter}><i class="fa-brands fa-twitter fa-xl" /></a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
