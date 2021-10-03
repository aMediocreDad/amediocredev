<script lang="ts">
	export let list: Record<string, any>[];
	export let title: string;
</script>

<section>
	<header id={title.toLowerCase().replace(/\s/, "-")}>
		<h2>
			{title}
		</h2>
	</header>
	{#if list}
		<ul>
			{#each list as card}
				<li class={card.highlight ? "highlight" : ""}>
					<article>
						<div class="cover"><slot name="cover" {card} /></div>
						<div class="content"><slot name="card" {card} /></div>
					</article>
				</li>
			{/each}
		</ul>
	{:else}
		<p>Failed to load content...</p>
	{/if}
</section>

<style lang="scss">
	@import "../sass/media-queries";

	h2 {
		text-align: center;
		font-size: 2rem;
	}
	ul {
		list-style: none;
		margin-inline: auto;
		margin-block: var(--l) var(--xl);

		width: clamp(200px, 80%, 70rem);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(32ch, 1fr));
		gap: var(--xl);

		color: var(--bg);

		li {
			max-width: 65ch;
		}
	}
	article {
		border-radius: var(--m);
		box-shadow: 1px 2px 5px var(--acc2);
		overflow: hidden;

		transition: transform 200ms ease;

		.cover {
			width: 100%;

			:global(img) {
				object-fit: cover;
				width: 100%;
				display: block;
			}
		}

		.content {
			background: var(--acc2);
			padding: var(--m) var(--m) var(--l);
			display: flex;
			flex-direction: column;
			gap: var(--m);

			:global(a) {
				text-decoration: none;
				color: inherit;
			}
		}

		&:hover,
		&:focus-within {
			transform: scale(1.01);
		}

		@include tablet-min {
			.content {
				padding: var(--m) var(--l) var(--l);
			}
		}
	}
</style>
