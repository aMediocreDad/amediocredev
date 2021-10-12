import type { RequestHandler } from "@sveltejs/kit";
import { client, urlFor } from "$lib/sanityClient";
import type { Project } from "$lib/types";

export const get: RequestHandler = async () => {
	const query = "*[_type == 'project']";
	try {
		const res = await client.fetch(query);
		const projects = res.reduce((obj: Project[], project: Project) => {
			project.coverImage.url = urlFor(project.coverImage).width(800).height(400).url();
			return [...obj, project];
		}, []);
		return {
			status: 200,
			body: projects
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: "Failed to fetch projects"
			}
		};
	}
};
