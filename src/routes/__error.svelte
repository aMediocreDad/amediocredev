<script context="module">
	export async function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error, status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>Hi there, {status}...</h1>

<p>Unfortunately, {error.message}</p>
