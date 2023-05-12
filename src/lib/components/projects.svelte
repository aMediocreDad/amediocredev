<script lang="ts">
	import CardGrid from "$lib/layouts/card-grid.svelte";
	import type { Project } from "$lib/types";
	import LinkIcon from "./link-icon.svelte";
	import Tag from "./tag.svelte";

	export let projects: Project[];

	const iconLookup = {
		other: "icon-comment-16",
		repository: "icon-mark-github-16",
		website: "icon-browser-16"
	};

	const getLinks = (links: Project["links"]): [string, string][] => {
		return Object.entries(links).reverse();
	};

	const getIcon = (key: string) => {
		return iconLookup[key as "other" | "repository" | "website"] || "";
	};
</script>

<CardGrid title="Projects" list={projects}>
	<img slot="cover" let:card src={card.coverImage.url} alt={card.coverImage.alt} />
	<svelte:fragment slot="card" let:card>
		<div class="grid-wrap">
			<h3>{card.title}</h3>
			<ul class="links">
				{#each getLinks(card.links) as [key, link]}
					<li><LinkIcon href={link} title={key}><i class={getIcon(key)} /></LinkIcon></li>
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
	@import "../../styles/media-queries";

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
