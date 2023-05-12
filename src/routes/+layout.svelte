<script lang="ts">
	import "../styles/app.css";
	import "../styles/bespoke-sans.css";
	import "../styles/nonicons.css";

	import Footer from "$lib/layouts/footer.svelte";
	import Header from "$lib/layouts/header.svelte";
	import ScrollTop from "$lib/components/scroll-top.svelte";
	import { browser } from "$app/environment";

	let showScrollToTop: boolean = false;
	let root: HTMLElement;
	if (browser) {
		root = document.documentElement;
	}
	let farEnough = () =>
		(showScrollToTop = browser && root?.scrollTop / (root?.scrollHeight - root?.clientHeight) > 0.1);
</script>

<svelte:window on:scroll={farEnough} />

<Header />

<slot />

{#if showScrollToTop}
	<ScrollTop />
{/if}

<Footer />
