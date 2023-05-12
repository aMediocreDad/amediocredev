import type { Project } from "$lib/types";
import { sanityClient, urlFor } from "$lib/sanityClient";

export async function load() {
	const query = "*[_type == 'project']";
	try {
		const res = await sanityClient.fetch(query);
		const projects = res.reduce((obj: Project[], project: Project) => {
			project.coverImage.url = urlFor(project.coverImage).width(800).height(400).url();
			return [...obj, project];
		}, []);
		return { projects };
	} catch (error) {
		return { error: "Failed to load projects" };
	}
}
