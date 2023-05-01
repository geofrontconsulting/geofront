<script lang="ts">
	import '../app.scss';
	import Navigation from '$lib/components/Navigation.svelte';

	let navbarHeight: number;
</script>

<Navigation bind:height={navbarHeight} />

<div class="p-4" style="margin-top: {navbarHeight}px;">
	<slot />
</div>
