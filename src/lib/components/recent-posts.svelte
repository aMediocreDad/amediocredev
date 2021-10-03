<script>
	import CardGrid from "$lib/layouts/card-grid.svelte";
	import { onMount } from "svelte";
	import LinkButton from "./link-button.svelte";

	let posts;
	onMount(async () => {
		const res = await fetch("https://dev.to/api/articles?username=amediocredev&per_page=4");
		if (res.ok) {
			posts = await res.json();
		}
	});
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
	<p>Finding recent posts...</p>
{/if}

<style lang="scss">
	h3 {
		font-size: 1.8rem;
	}
</style>
