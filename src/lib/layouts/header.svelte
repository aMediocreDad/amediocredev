<script>
	import LinkIcon from "$lib/components/link-icon.svelte";
	import Ln from "$lib/icons/ln.svelte";
</script>

<nav>
	<div class="left-container">
		<a href="/">aMediocre<span>Dev</span></a>
	</div>
	<div class="right-container">
		<LinkIcon href="https://linkedin.com/in/iambrosius/" title="LinkedIn"><Ln /></LinkIcon>
		<LinkIcon href="https://github.com/aMediocreDad" title="Github"><i class="icon-mark-github-16" /></LinkIcon>
	</div>
</nav>

<style lang="scss">
	nav {
		margin-block: var(--m) var(--xl);
		margin-inline: var(--m);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		font-weight: 400;
	}
	.left-container > a {
		font-size: 1.5rem;

		& > span {
			font-weight: 700;
			color: var(--acc1);
		}
	}
	.right-container {
		margin-left: auto;
		display: flex;
		flex-wrap: nowrap;
		gap: var(--m);
	}
</style>
