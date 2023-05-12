import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, data }) => {
	const posts = await fetch("https://dev.to/api/articles?username=amediocredev&per_page=4");

	return {
		projects: data.projects ? data.projects : data.error,
		posts: posts.ok ? await posts.json() : null
	};
};
