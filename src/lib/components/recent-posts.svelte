<script>
	import CardGrid from "$lib/layouts/card-grid.svelte";
	import LinkButton from "./link-button.svelte";

	export let posts;
</script>

{#if posts}
	<CardGrid title="Recent Blog" list={posts}>
		<img slot="cover" let:card src={card.social_image} alt="{card.title} cover image" />
		<svelte:fragment slot="card" let:card>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
			<LinkButton href="blog/{card.slug}" text="Read" hero --button-width="7rem" --m="0.8rem" />
		</svelte:fragment>
	</CardGrid>
{:else}
	<p class="failed">Failed to get blog posts from <a href="https://dev.to/aMediocreDad/posts">dev.to</a>...</p>
{/if}

<style lang="scss">
	h3 {
		font-size: 1.8rem;
	}

	p.failed {
		font-size: 1.5rem;
		margin-inline: auto;
	}

	a {
		color: var(--acc1);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
