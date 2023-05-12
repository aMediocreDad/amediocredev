import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const sanityClient = createClient({
	projectId: env.SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: Record<string, string>): ImageUrlBuilder => {
	return builder.image(source);
};
