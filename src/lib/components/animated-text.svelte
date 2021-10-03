<script>
	// @ts-nocheck
	import { inview } from "svelte-inview";
	import { spring, tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	export let text;

	let position = spring(0, { stiffness: 0.06, damping: 0.15 });
	let opacity = tweened(0, {
		duration: 200,
		easing: cubicInOut
	});

	let isInView;
	let scrollDirection;

	const options = {
		rootMargin: "-50px"
	};

	const handleChange = ({ detail }) => {
		scrollDirection = detail.scrollDirection.vertical;
		isInView = detail.inView;
		if (scrollDirection === "down") position.set(200);
		if (scrollDirection === "up") position.set(-200);
		if (isInView) {
			position.set(0);
			return opacity.set(1);
		} else return opacity.set(0);
	};
</script>

<div use:inview={options} on:change={handleChange} style="transform:translateY({$position}px);opacity:{$opacity};">
	{text}
</div>

<style>
	div {
		font-size: var(--xl);
		font-weight: 900;
		text-shadow: 0 0 4px #6669;
	}
</style>
