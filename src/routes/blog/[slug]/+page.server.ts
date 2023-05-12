import { error } from "@sveltejs/kit";

import insane from "insane";
import hljs from "highlight.js";
import { marked } from "marked";
import type { BlogPost } from "$lib/types.js";

export async function load({ params: { slug } }) {
	const res = await fetch(`https://dev.to/api/articles/amediocredev/${slug}`);

	if (!res.ok) return error(404, "Blog post not found");

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
		post: {
			title,
			published,
			publishedIso,
			cover_image,
			tags,
			url,
			reading_time_minutes,
			cleanHTML
		} as BlogPost
	};
}
