import type { RequestHandler } from "@sveltejs/kit";
import { client } from "$lib/sanityClient";

export const get: RequestHandler = async () => {
	const query = "*[_type == 'project']";
	try {
		const res = await client.fetch(query);
		return {
			status: 200,
			body: res
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
