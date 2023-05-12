<script>
	import { page } from "$app/stores";
</script>

<h1>{$page.status} : {$page.error?.message}</h1>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	<strong>Hi there...</strong>

	<h1>{$page.status}</h1>

	<p>{$page.error?.message}</p>
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
	strong {
		align-self: flex-end;
	}

	h1 {
		font-size: var(--xxl);
	}
</style>
