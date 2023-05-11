<script lang="ts">
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

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to GeoFront.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img src="/assets/logo.svg" />
		</figure>
		<!-- / -->
		<div class="justify-center space-x-2 space-y-4">
			<p>
				GeoFront is the team of experts dedicated to providing innovative Data solutions for your
				business needs.
			</p>
			<p>
				At GeoFront, we understand that data and spatial data is a critical component of
				decision-making processes. That's why we are committed to offering top-notch services that
				enable you to visualize, analyse, and interpret your data with ease. Our tagline "Your
				spatial data on the front" encapsulates our commitment to making spatial data accessible to
				everyone. We believe that by putting spatial data front and centre, we can help you gain
				valuable insights into your business operations.
			</p>
			<p>
				With GeoFront, you can expect a wide range of services, including spatial data analysis,
				mapping, modelling, and visualization. Our team of experts is always ready to work closely
				with you to understand your unique needs and provide tailor-made solutions that meet your
				business requirements. Whether you're a small startup or a large enterprise, we've got you
				covered. Our services are scalable, meaning that we can accommodate your growing needs as
				your business expands.
			</p>
			<p>
				At GeoFront, we pride ourselves on delivering exceptional quality services that exceed our
				clients' expectations. We are passionate about spatial data, and we are dedicated to helping
				you make informed decisions that drive business growth.
			</p>
			<p>
				Thank you for choosing GeoFront. Let us be your trusted partner in unlocking the power of
				spatial data.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
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
