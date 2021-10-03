<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ fetch }) => {
		const res = await fetch("projects.json");

		return {
			props: {
				projects: res.ok ? await res.json() : {}
			}
		};
	};

	export const prerender = true;
</script>

<script lang="ts">
	import Hero from "$lib/components/hero.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Adcopy from "$lib/components/adcopy.svelte";
	import Stalactites from "$lib/svg/stalactites.svelte";
	import RecentPosts from "$lib/components/recent-posts.svelte";
	import type { Project } from "$lib/types";

	export let projects: Project[];
</script>

<svelte:head>
	<title>aMediocreDev</title>
</svelte:head>

<main>
	<Hero />

	<Adcopy />

	<Stalactites />

	<div class="alt-bg-wrap">
		<Projects {projects} />
		<RecentPosts />
	</div>
</main>

<style>
	.alt-bg-wrap {
		background: var(--bg);
		display: flex;
		flex-direction: column;
		gap: var(--xl);
		padding-block: var(--xl);
	}
</style>
