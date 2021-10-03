<script>
	import Footer from "$lib/layouts/footer.svelte";
	import Header from "$lib/layouts/header.svelte";
	import Waves from "$lib/svg/waves.svelte";
</script>

<div class="bg-wrapper">
	<Waves />

	<Header />

	<slot />

	<Footer />
</div>

<style>
	@import "/static/app.css";

	div.bg-wrapper {
		background: var(--bg2);
	}
</style>
