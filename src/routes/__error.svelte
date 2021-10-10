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

<div>
	<h2>Hi there...</h2>

	<h1>{status}</h1>

	<p>{error.message}</p>
</div>

<style>
	div {
		flex: 1;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: var(--xxl);
		justify-content: center;
		text-align: center;
	}
	h2 {
		align-self: flex-end;
	}

	h1 {
		font-size: var(--xxl);
	}
</style>
