<script>
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<div>
	<h1>Oh hi there!</h1>

	<p><strong>Looks like we got a bad case of a {$page.status} error.</strong></p>
	<pre><code>Message: {$page.error?.message}</code></pre>
	<pre><code>Status: {$page.status}</code></pre>
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
