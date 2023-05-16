<script lang="ts">
	import Services from '$lib/components/services.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let title = `${data.config.name} • Services`;
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
	<Services />
</div>
