<script>
	import "../styles/app.css";
	import "../styles/bespoke-sans.css";
	import "../styles/nonicons.css";

	import Footer from "/src/layouts/footer.svelte";
	import Header from "/src/layouts/header.svelte";
</script>

<Header />

<slot />

<Footer />
