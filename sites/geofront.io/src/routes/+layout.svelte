<script lang="ts">
	import { onMount } from 'svelte';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch, modeCurrent, setModeCurrent } from '@skeletonlabs/skeleton';

	import type { PageData } from './$types';
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	onMount(() => {
		setModeCurrent($modeCurrent);
	});

	let isSidebarShown = false;

	let handleMenuClicked = () => {
		isSidebarShown = !isSidebarShown;
	};

	const handleEnterKey = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			e.target.click();
		}
	};

	beforeNavigate(async () => {
		isSidebarShown = false;
	});

	$: classesActive = (href: string, hasSubpages = false) => {
		return (hasSubpages && $page.url.pathname.startsWith(href)) || href === $page.url.pathname
			? '!bg-primary-700'
			: '';
	};
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<!-- App Shell -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<AppShell
	slotSidebarLeft={isSidebarShown ? 'bg-surface-500/5 p-4' : ''}
	slotPageFooter="bg-surface-100-800-token p-4"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button
					class="btn btn-sm xl:hidden block"
					on:click={handleMenuClicked}
					on:keydown={handleEnterKey}
				>
					{#if isSidebarShown}
						<i class="fa-solid fa-xmark fa-xl" />
					{:else}
						<i class="fa-solid fa-bars fa-xl" />
					{/if}
				</button>

				<a href="/" class="hidden xl:block"> Home </a>
				<a href="/about" class="hidden xl:block"> About </a>
				<a href="/team" class="hidden xl:block"> Team </a>
				<a href="/services" class="hidden xl:block"> Services </a>
				<a href="/blog" class="hidden xl:block"> Blog </a>
			</svelte:fragment>

			<a href="/" class="flex items-center">
				<img
					class="h-12"
					src="/assets/{$modeCurrent
						? 'Black logo - no background.svg'
						: 'Color logo - no background.svg'}"
				/>
			</a>

			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm"
					href={data.config.socialmedia.github}
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-github fa-2xl" />
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		{#if isSidebarShown}
			<nav class="list-nav">
				<ul>
					<li><a href="/" class={classesActive('/')}>Home</a></li>
					<li><a href="/about" class={classesActive('/about')}>About</a></li>
					<li><a href="/team" class={classesActive('/team')}>Team</a></li>
					<li>
						<a href="/services" class={classesActive('/services')}>Service</a>
						<nav class="list-nav pl-4">
							<ul>
								{#each data.config.services as service}
									<li>
										<a
											href="/services/{service.id}"
											class={classesActive(`/services/${service.id}`)}>{service.name}</a
										>
									</li>
								{/each}
							</ul>
						</nav>
					</li>
					<li><a href="/blog" class={classesActive('/blog', true)}>Blog</a></li>
				</ul>
			</nav>
		{/if}
	</svelte:fragment>

	<!-- Page Route Content -->
	<div class="p-4">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="m-2 grid md:grid-cols-2 gap-4">
			<div class="flex-row md:mx-auto">
				<figure>
					<img class="xl:h-40 md:w-auto" src="/assets/logo.png" />
				</figure>
				<div class="flex pt-4 justify-center">
					<a
						class="btn btn-sm"
						href={data.config.socialmedia.github}
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-github fa-2xl" />
						<span>Github</span>
					</a>
					<a
						class="btn btn-sm"
						href={data.config.socialmedia.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-linkedin fa-2xl" />
						<span>LinkedIn</span>
					</a>
					<a
						class="btn btn-sm"
						href={data.config.socialmedia.twitter}
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-twitter fa-2xl" />
						<span>Twitter</span>
					</a>
				</div>
			</div>
			<nav class="list-nav">
				<ul>
					<li><a href="/" class={classesActive('/')}>Home</a></li>
					<li><a href="/about" class={classesActive('/about')}>About</a></li>
					<li><a href="/team" class={classesActive('/team')}>Team</a></li>
					<li><a href="/services" class={classesActive('/services', true)}>Service</a></li>
					<li><a href="/blog" class={classesActive('/blog', true)}>Blog</a></li>
				</ul>
			</nav>
		</div>

		<p class="flex justify-center p-3"><a href="/">{data.config.copyright}</a></p>
	</svelte:fragment>
</AppShell>
