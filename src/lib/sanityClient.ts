import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string): ImageUrlBuilder => {
	return builder.image(source);
};
