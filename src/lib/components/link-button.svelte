<script lang="ts">
	export let href: string;
	export let isExternal = false;
	export let hero = false;
	export let text: string;
</script>

<a {href} class:hero rel={isExternal ? "noopener" : ""} target={isExternal ? "_blank" : ""}>{text}</a>

<style lang="scss">
	a {
		height: calc(var(--button-width) / 3);
		width: var(--button-width);
		display: grid;
		place-content: center;

		text-decoration: none;
		text-align: center;
		border-radius: var(--xl);
		border: 3px solid var(--acc1);
		background: var(--bg);
		color: var(--acc1);
		font-size: var(--m);

		font-weight: 700;

		overflow: hidden;
		transition: all 200ms ease;

		&:hover,
		&:focus-visible {
			background-color: var(--acc1);
			color: var(--bg);
		}

		&.hero {
			border: none;
			background-color: var(--acc1);
			color: var(--bg);

			&:hover,
			&:focus-visible {
				background-color: var(--text);
				color: var(--bg);
				box-shadow: 1px 2px 4px var(--acc2);
			}
		}
	}
</style>
