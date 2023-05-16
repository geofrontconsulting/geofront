<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

	let title = `${data.config.name} • About`;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={data.config.summary} />
	<meta name="description" content={data.config.summary} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={data.config.summary} />
	<meta property="og:url" content="https://github.com/geofrontconsulting/" />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

<div class="container h-full mx-auto flex-col justify-center">
	<div class="space-y-10">
		<h2 class="font-bold text-center">Welcome to {data.config.name}</h2>
		<img class="h-auto md:h-96 mx-auto" src="/assets/logo.svg" alt="logo" />
		<div class="justify-center space-x-2 space-y-4 text-center">
			{@html marked.parse(data.config.description)}
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
