<script>
	import Display from "$lib/svg/display.svelte";
	import CTAS from "$lib/components/ctas.svelte";
</script>

<section>
	<div class="wrapper">
		<h1>
			Dad or Dev,<br />
			I am Mediocre<span>✨</span>
		</h1>
		<CTAS />
	</div>
	<Display />
</section>

<style lang="scss">
	@import "../sass/media-queries";

	section {
		min-height: 65vh;
		margin-inline: var(--s);
		margin-block-end: clamp(180px, 30vh, 400px);
		display: flex;
		flex-wrap: wrap-reverse;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--s);
	}
	h1 {
		font-size: clamp(2.3rem, 7vw, 6rem);
		line-height: 1.1;
		margin: 0;

		span {
			font-size: clamp(1.5rem, 5vw, 2rem);
			display: block;
			filter: hue-rotate(173deg);
		}
	}

	@include tablet-min {
		section {
			margin-inline: var(--m);
			text-align: left;
			justify-content: space-around;
			gap: var(--m);
		}

		.wrapper {
			align-items: flex-start;
		}

		h1 {
			position: relative;

			span {
				position: absolute;
				display: inline-block;
			}
		}
	}

	@include desktop-min {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--xl);
			margin-inline: var(--xl);
		}
	}
</style>
