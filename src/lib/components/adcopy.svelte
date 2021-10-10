<script>
	import AnimatedText from "./animated-text.svelte";
</script>

<section>
	<AnimatedText text="JAMStack" />
	<AnimatedText text="FullStack" />
	<AnimatedText text="Your Stack" />
</section>

<style lang="scss">
	@import "../../styles/media-queries";
	section {
		width: 100%;
		height: 45vh;

		display: grid;
		place-content: center;
		gap: var(--xl);
	}

	@include tablet-min {
		section {
			gap: var(--xxl);
		}
	}
</style>
