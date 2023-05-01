<script lang="ts">
	import '../app.scss';

	let isNavMenuActive = false;
	let navbarHeight = 52;
</script>

<nav
	class="navbar is-fixed-top is-primary"
	role="navigation"
	aria-label="main navigation"
	bind:clientHeight={navbarHeight}
>
	<div class="navbar-brand">
		<a class="navbar-item" href="https://geofront.io">
			<img src="/assets/logo.png" width="77" height="28" />
		</a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbar-menu"
			on:click={() => {
				isNavMenuActive = !isNavMenuActive;
			}}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbar-menu" class="navbar-menu {isNavMenuActive ? 'is-active' : ''}">
		<div class="navbar-start">
			<a class="navbar-item"> Home </a>

			<a class="navbar-item"> About </a>

			<a class="navbar-item"> Services </a>

			<a class="navbar-item"> Contact </a>
		</div>
	</div>
</nav>

<div style="margin-top: {navbarHeight}px;">
	<slot />
</div>
