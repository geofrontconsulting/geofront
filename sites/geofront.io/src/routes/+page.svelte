<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.config.title}</title>

	<meta name="twitter:title" content="SvelteKit" />
	<meta name="twitter:description" content="Web development, streamlined" />
	<meta name="description" content={data.config.summary} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.config.title} />
	<meta property="og:description" content={data.config.summary} />
	<meta property="og:url" content="https://github.com/geofrontconsulting/" />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to {data.config.name}</h2>
		<figure>
			<img src="/assets/logo.svg" />
		</figure>
		<div class="justify-center space-x-2 space-y-4">
			<p>
				{data.config.summary}
			</p>
			<a class="btn variant-filled-primary" href="/about">Read more about GeoFront</a>
		</div>

		<div class="justify-center space-x-2 space-y-4">
			<h3 class="font-bold">Our services</h3>
			<div class="grid md:grid-cols-4 gap-4">
				{#each data.config.services as service}
					<a class="flex-col cursor-pointer" href="/services/{service.id}">
						<p><i class="{service.icon} fa-4x" /></p>
						<p class="text-xl font-semibold p-2">{service.name}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
