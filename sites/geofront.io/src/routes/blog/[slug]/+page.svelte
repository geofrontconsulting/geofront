<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	$: pages = data.sections.flatMap((section) => section.pages);
	$: index = pages.findIndex(({ path }) => path === $page.url.pathname);
	$: prev = pages[index - 1];
	$: next = pages[index + 1];
</script>

<svelte:head>
	<title>{data.page?.title} • Blog • GeoFront</title>

	<meta name="twitter:title" content="GeoFront Documentation" />
	<meta name="twitter:description" content={data.page?.description} />
	<meta name="description" content={data.page?.description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="{data.page?.title} • Documentation • GeoFront" />
	<meta property="og:description" content={data.page?.description} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content="/assets/logo-only.png" />
</svelte:head>

<div class="container h-full mx-auto flex-col justify-center">
	<h1>{data.page?.title}</h1>

	{#if data.page?.author}
		<section class="justify-center space-y-4 pt-2">
			<p class="font-semibold">Author: {data.page?.author}</p>
		</section>
	{/if}

	<section class="justify-center space-y-4 pt-6">
		{@html data.page?.content}
	</section>

	<hr class="!border-t-4 mt-8 pt-2" />
	<div class="controls grid grid-cols-2">
		<div class="text-left">
			<span class="block text-lg uppercase font-semibold" class:faded={!prev}>previous</span>
			{#if prev}
				<a href={prev.path}>{prev.title}</a>
			{/if}
		</div>

		<div class="text-right">
			<span class="block text-lg uppercase font-semibold" class:faded={!next}>next</span>
			{#if next}
				<a href={next.path}>{next.title}</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.controls span.faded {
		opacity: 0.4;
	}
</style>
