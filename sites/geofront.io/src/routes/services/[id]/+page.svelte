<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	let title = `${data.config.name} • Services • ${data.service.name}`;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={data.config.summary} />
	<meta name="description" content={data.config.summary} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={data.config.summary} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

{#key data.service}
	<div class="container h-full mx-auto flex justify-center">
		<div class="space-y-10 text-center">
			<div class="justify-center space-x-2 space-y-4">
				<p class="text-xl font-semibold p-2">{data.service.name}</p>

				<p><i class="{data.service.icon} fa-4x" /></p>

				<p class="text-xl">Services</p>
				<ol class="list">
					{#each data.service.items as item, index}
						<li>
							<span>{index + 1}.</span>
							<span class="flex-auto">{item}</span>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
{/key}
