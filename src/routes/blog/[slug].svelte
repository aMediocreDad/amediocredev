<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	export const load: Load = async ({
		fetch,
		page: {
			params: { slug }
		}
	}) => {
		const res = await fetch(`https://dev.to/api/articles/amediocredev/${slug}`);
		if (res.ok) {
			const post = await res.json();
			return {
				props: {
					post
				}
			};
		}
		throw new Error("I Failed to get the post you are looking for.");
	};
</script>

<script lang="ts">
	import type { BlogPost } from "$lib/types";
	import hljs from "highlight.js";
	import marked from "marked";
	import insane from "insane";
	import Tag from "$lib/components/tag.svelte";

	export let post: BlogPost;

	const { title, published_at, cover_image, tags, url, reading_time_minutes, body_markdown } = post;
	const published = new Date(published_at);

	const markedOptions = {
		highlight: (str: string) => hljs.highlightAuto(str).value,
		langPrefix: "hljs language-",
		smartLists: true,
		smartypants: true
	};
	const insaneOptions = {
		allowedAttributes: { span: ["class"], code: ["class"], h2: ["id"], img: ["src", "alt"] }
	};

	const cleanHTML = insane(marked(body_markdown, markedOptions), insaneOptions);
</script>

<svelte:head>
	<title>Blog: {title}</title>
</svelte:head>

<article>
	<img src={cover_image} alt="{title} cover image" />
	<h1>{title}</h1>
	<ul class="details">
		<li>
			<i class="icon-calendar-16" /><time datetime={published.toISOString()}
				>{published.toLocaleDateString()}</time
			>
		</li>
		<li><i class="icon-clock-16" />{reading_time_minutes} minute read</li>
		<li><i class="icon-comment-16" /><a href={url} rel="_noopener" target="_blank">@dev.to</a></li>
	</ul>

	<ul class="tags">
		{#each tags as tag}
			<Tag text={tag} --text="var(--acc1)" />
		{/each}
	</ul>
	<div class="body">
		{@html cleanHTML}
	</div>
</article>

<style lang="scss">
	@import "../../lib/sass/media-queries.scss";
	article {
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: var(--m);
		margin-block-end: var(--xl);
		width: 100%;
	}

	h1 {
		font-size: clamp(2rem, 5vw, var(--xl));
		margin-inline: var(--s);
		text-align: center;
	}

	img {
		display: block;
		width: min(80%, 60rem);
		margin-inline: auto;
		border-radius: var(--m);
	}

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--m);
		margin-inline: auto;

		&.details {
			font-size: 1rem;
			font-weight: bold;
			opacity: 0.8;

			li {
				display: inline-flex;
				align-items: center;
				gap: var(--s);

				a {
					text-decoration: none;
					color: var(--text);

					&:hover {
						color: var(--acc1);
					}
				}
			}

			i {
				font-size: var(--icon-size);
				line-height: 1;
			}
		}
	}

	@include tablet-min {
		ul.details {
			font-size: 1.1rem;
			gap: var(--l);
		}
	}
</style>
