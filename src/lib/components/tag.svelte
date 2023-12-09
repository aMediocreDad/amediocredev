<script lang="ts">
	export let text: string;
</script>

<li>{text}</li>

<style>
	li {
		display: inline-block;
		border: 2px solid var(--text);
		width: 7rem;
		height: 2.2rem;
		font-size: 0.8rem;
		color: var(--text);

		display: grid;
		place-content: center;

		border-radius: var(--xl);
	}
</style>
