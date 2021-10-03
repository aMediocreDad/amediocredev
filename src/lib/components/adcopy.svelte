<script>
	import AnimatedText from "./animated-text.svelte";
</script>

<section>
	<AnimatedText text="JAMStack" --delay="0ms" />
	<AnimatedText text="FullStack" --delay="250ms" />
	<AnimatedText text="Your Stack" --delay="500ms" />
</section>

<style>
	section {
		width: 100%;
		height: 45vh;

		display: grid;
		place-content: center;
		gap: var(--xxl);
	}
</style>
