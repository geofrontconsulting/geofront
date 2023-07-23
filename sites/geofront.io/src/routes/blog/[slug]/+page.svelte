<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page?.title} • Blog • GeoFront</title>

	<meta name="twitter:title" content="GeoFront Documentation" />
	<meta name="twitter:description" content="{data.page?.title} • GeoFront Documentation" />
	<meta name="description" content="{data.page?.title} • GeoFront Documentation" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="{data.page?.title} • Documentation • GeoFront" />
	<meta property="og:description" content="{data.page?.title} • GeoFront Documentation" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

<div class="container h-full mx-auto flex-col justify-center">
	<h1>{data.page?.title}</h1>
	<section class="justify-center space-y-4 pt-6">
		{@html data.page?.content}
	</section>
</div>
