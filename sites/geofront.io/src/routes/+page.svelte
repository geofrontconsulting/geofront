<script lang="ts">
	import Services from '$lib/components/services.svelte';
	import Teams from '$lib/components/teams.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.config.title}</title>

	<meta name="twitter:title" content={data.config.title} />
	<meta name="twitter:description" content={data.config.summary} />
	<meta name="description" content={data.config.summary} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.config.title} />
	<meta property="og:description" content={data.config.summary} />
	<meta property="og:url" content="https://github.com/geofrontconsulting/" />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

<div class="container h-full mx-auto flex-col justify-center">
	<div class="space-y-10">
		<h2 class="font-bold text-center">Welcome to {data.config.name}</h2>

		<img class="h-auto md:h-96 mx-auto" src="/assets/logo.svg" alt="logo" />

		<div class="justify-center space-x-2 space-y-4 text-center">
			<p>
				{data.config.summary}
			</p>
			<a class="btn variant-filled-primary" href="/about">Read more about GeoFront</a>
		</div>

		<div class="justify-center space-x-2 space-y-4">
			<Services />
		</div>
	</div>

	<Teams />
</div>
