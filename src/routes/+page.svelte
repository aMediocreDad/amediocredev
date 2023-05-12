<script lang="ts">
	import Waves from "$lib/svg/waves.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Adcopy from "$lib/components/adcopy.svelte";
	import Stalactites from "$lib/svg/stalactites.svelte";
	import RecentPosts from "$lib/components/recent-posts.svelte";

	export let data;

	let { projects, posts } = data;
</script>

<svelte:head>
	<title>aMediocreDev</title>
</svelte:head>

<main>
	<Waves />

	<Hero />

	<Adcopy />

	<Stalactites />

	<div class="alt-bg-wrap">
		<Projects {projects} />
		<RecentPosts {posts} />
	</div>
</main>

<style>
	main {
		background: var(--bg2);
		position: relative;
		z-index: 0;
	}
	.alt-bg-wrap {
		background: var(--bg);
		display: flex;
		flex-direction: column;
		gap: var(--xl);
		padding-block: var(--xl);
	}
</style>
