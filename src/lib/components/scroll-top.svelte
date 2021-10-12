<script>
	import { fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";
</script>

<button
	on:click={() => window.scroll({ top: 0 })}
	in:fly={{ delay: 150, duration: 350, y: 500, opacity: 0, easing: cubicOut }}
	out:fly={{ delay: 0, duration: 400, y: 500, opacity: 1, easing: cubicOut }}><i class="icon-arrow-up-16" /></button
>

<style lang="scss">
	button {
		border: none;
		border-radius: 100%;
		height: var(--xl);
		width: var(--xl);
		position: fixed;
		bottom: var(--xl);
		right: var(--xl);

		display: grid;
		place-content: center;

		box-shadow: 1px 1px 3px var(--bg2);
		background: var(--acc1);
		color: var(--bg);

		z-index: 99;
		cursor: pointer;
		transition: box-shadow 600ms ease;

		i {
			display: block;
			line-height: 1;
			font-size: var(--icon-size);
			transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		}

		&:hover {
			box-shadow: 1px 2px 6px var(--bg2);
			i {
				transform: translateY(2px);
			}
		}

		&:active {
			transform: scale(0.9);
		}
	}
</style>
