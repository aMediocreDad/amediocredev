<script>
	import LinkButton from "./link-button.svelte";
</script>

<div class="ctas">
	<LinkButton href="mailto:hello@amediocre.dev" hero text="Contact me!" />
	<LinkButton href="#projects" text="Projects" />
	<LinkButton href="#recent-blog" text="Blog" />
</div>

<style lang="scss">
	@import "../sass/media-queries";

	.ctas {
		margin: var(--m) 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--m);

		--button-width: 8rem;
	}

	@include tablet-min {
		.ctas {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include desktop-min {
		.ctas {
			--button-width: 9rem;
		}
	}
</style>
