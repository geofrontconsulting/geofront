<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Services from '$lib/components/Services.svelte';

	let title = 'GeoFront • your spatial data on the front';
	let description =
		'GeoFront is the team of experts dedicated to providing innovative Data solutions for your business needs';
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="twitter:title" content="SvelteKit" />
	<meta name="twitter:description" content="Web development, streamlined" />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta
		property="og:description"
		content="SvelteKit is the official Svelte application framework"
	/>
	<meta property="og:url" content="https://kit.svelte.dev/" />
	<meta property="og:image" content="/assets/logo.svg" />
</svelte:head>

<div class="home">
	<Hero />
	<Intro />
	<Services />

	<footer class="py-4">
		<p class="subtitle is-6">
			<b
				><a target="_blank" rel="noreferrer" href="https://github.com/geofrontconsulting"
					>GeoFront</a
				></b
			> is the team of experts dedicated to providing innovative Data solutions for your business needs
		</p>
	</footer>
</div>

<style>
	footer {
		padding: 1em var(--sk-page-padding-side);
		text-align: center;
		background: var(--sk-back-2);
	}

	footer p {
		max-width: 20em;
		margin: 0 auto;
	}

	footer p a {
		color: inherit;
		text-decoration: underline;
	}

	@media (min-width: 680px) {
		footer p {
			max-width: none;
		}
	}
</style>
