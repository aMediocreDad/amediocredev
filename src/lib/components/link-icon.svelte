<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} target="_blank" rel="noopener" {title}><slot>Link</slot></a>

<style lang="scss">
	a {
		font-size: var(--icon-size);
		width: var(--icon-size);
		height: var(--icon-size);

		:global(i),
		:global(svg) {
			line-height: 1;
		}

		&:hover {
			color: var(--acc1);
		}
	}
</style>
