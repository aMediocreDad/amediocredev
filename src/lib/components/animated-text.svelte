<script lang="ts">
	import { inview } from "svelte-inview";
	import { spring, tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	export let text: string;

	let position = spring(0, { stiffness: 0.1, damping: 0.25 });
	let opacity = tweened(1, {
		duration: 200,
		easing: cubicInOut
	});

	let isInView;
	let scrollDirection;

	const options = {
		rootMargin: "-50px"
	};

	const handleChange = (ev: CustomEvent) => {
		scrollDirection = ev.detail.scrollDirection.vertical;
		isInView = ev.detail.inView;
		if (scrollDirection === "down") position.set(200);
		if (scrollDirection === "up") position.set(-200);
		if (isInView) {
			position.set(0);
			return opacity.set(1);
		} else return opacity.set(0);
	};
</script>

<div
	use:inview={options}
	on:inview_change={handleChange}
	style="transform:translateY({$position}px);opacity:{$opacity};"
>
	{text}
</div>

<style>
	div {
		font-size: var(--xl);
		font-weight: 900;
		text-shadow: 0 0 4px #6669;
	}
</style>
