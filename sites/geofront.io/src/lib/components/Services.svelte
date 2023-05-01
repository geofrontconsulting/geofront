<script lang="ts">
	let services = [
		'GIS projects',
		'Data analysis, data output, and data production',
		'Configuration consulting',
		'Web mapping and Internet mapping, Configuration consulting',
		'Operationalising Earth Observations',
		'Software customization and development',
		'Rent-a-tech consulting',
		'Address geocoding and reverse geocoding',
		'Geostatistics',
		'Cartography and cartographic modelling',
		'Topological modeling',
		'Territory maps',
		'Redistricting',
		'Modeling',
		'Multi-criteria decision analysis',
		'ArcGIS, QGIS, R and Python Consulting'
	];
</script>

<div class="container p-4 is-flex is-flex-direction-column align-center">
	<p class="title is-2">Services</p>

	<ul class="services">
		{#each services as service}
			<li>
				<p class="subtitle is-4 p-2">{service}</p>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.align-center {
		width: max-content;
		margin: auto;
	}
	.services {
		list-style-type: decimal;
	}
</style>
