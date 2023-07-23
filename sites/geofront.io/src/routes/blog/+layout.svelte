<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<AppShell
	slotSidebarLeft="bg-surface-500/10 w-0 lg:w-64 lg:p-4"
	slotPageFooter="bg-surface-500/10 lg:hidden"
>
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				{#each data.sections as section}
					<li>
						<span class="break-words whitespace-pre-wrap">
							{section.title}
						</span>

						<ul class="list-nav">
							{#each section.pages as { title, path }}
								<li>
									<a href={path}>
										<span class="break-words whitespace-pre-wrap">{title}</span>
									</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<nav class="list-nav p-4">
			<ul>
				{#each data.sections as section}
					<li>
						<span class="break-words whitespace-pre-wrap">
							{section.title}
						</span>

						<ul class="list-nav">
							{#each section.pages as { title, path }}
								<li>
									<a href={path}>
										<span class="break-words whitespace-pre-wrap">{title}</span>
									</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<div class="p-3">
		<slot />
	</div>
</AppShell>

<style>
</style>
