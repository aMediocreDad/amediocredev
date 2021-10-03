<script lang="ts">
	//@ts-nocheck Type 'unknown' is not assignable to type 'string'.ts(2322)
	import CardGrid from "$lib/layouts/card-grid.svelte";
	import { urlFor } from "$lib/sanityClient";
	import type { Project } from "$lib/types";
	import LinkIcon from "./link-icon.svelte";
	import Tag from "./tag.svelte";

	export let projects: Project[];

	const iconLookup = {
		other: "icon-comment-16",
		repository: "icon-mark-github-16",
		website: "icon-browser-16"
	};
</script>

<CardGrid title="Projects" list={projects}>
	<img slot="cover" let:card src={urlFor(card.coverImage).width(400).height(200).url()} alt={card.coverImage.alt} />
	<svelte:fragment slot="card" let:card>
		<div class="grid-wrap">
			<h3>{card.title}</h3>
			<ul class="links">
				{#each Object.entries(card.links).reverse() as [key, link]}
					<!--@ts-expect-error Type 'unknown' is not assignable to type 'string'.ts(2322)-->
					<li><LinkIcon href={link} title={key}><i class={iconLookup[key] || ""} /></LinkIcon></li>
				{/each}
			</ul>
		</div>
		<p>{card.summary}</p>
		<ul class="tags">
			{#each card.tags as tag}
				<Tag text={tag} --text="var(--bg)" />
			{/each}
		</ul>
	</svelte:fragment>
</CardGrid>

<style lang="scss">
	@import "../sass/media-queries";

	.grid-wrap {
		display: grid;
	}

	h3 {
		font-size: 1.8rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s);
	}

	.links {
		margin-inline-start: 0;
		margin-block-start: 0.3rem;
		font-size: 1.4rem;

		li:hover {
			color: var(--text);
		}
	}

	@include desktop-min {
		.grid-wrap {
			grid-template-columns: 2fr 1fr;
		}

		.links {
			margin-inline-start: auto;
		}
	}
</style>
