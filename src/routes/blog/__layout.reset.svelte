<script>
	import Footer from "$lib/layouts/footer.svelte";
	import Header from "$lib/layouts/header.svelte";
</script>

<div class="bg-wrapper">
	<Header />

	<slot />

	<Footer />
</div>

<style>
	@import "/static/app.css";
	@import "/static/blog.css";
	@import "/static/hljs.css";

	div.bg-wrapper {
		background: var(--bg);
	}
</style>
