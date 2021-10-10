import type { RequestHandler } from "node_modules/@sveltejs/kit/types/endpoint";
import hljs from "highlight.js";
import marked from "marked";
import insane from "insane";

export const get: RequestHandler = async ({ params: { slug } }) => {
	try {
		const res = await fetch(`https://dev.to/api/articles/amediocredev/${slug}`);
		const { title, published_at, cover_image, tags, url, reading_time_minutes, body_markdown } = await res.json();

		const markedOptions = {
			highlight: (str: string) => hljs.highlightAuto(str).value,
			langPrefix: "hljs language-",
			smartLists: true,
			smartypants: true
		};

		const renderer = {
			image(href: string, _title: string, text: string) {
				return `<img src="${href}" alt="${text}" loading="lazy" />`;
			}
		};

		marked.use({ renderer });

		const insaneOptions = {
			allowedAttributes: {
				span: ["class"],
				code: ["class"],
				h2: ["id"],
				img: ["src", "alt", "height", "width", "loading"]
			}
		};

		const cleanHTML = insane(marked(body_markdown, markedOptions), insaneOptions);
		const publishDate = new Date(published_at);
		const publishedIso = publishDate.toISOString();
		const published = publishDate.toLocaleDateString();

		return {
			status: 200,
			body: {
				post: {
					title,
					cover_image,
					published,
					publishedIso,
					tags,
					url,
					reading_time_minutes,
					cleanHTML
				}
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: "Failed to load blog post" }
		};
	}
};
