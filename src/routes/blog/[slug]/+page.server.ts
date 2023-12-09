import { error } from "@sveltejs/kit";

import insane from "insane";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import type { BlogPost } from "$lib/types.js";

export async function load({ params: { slug } }) {
	const res = await fetch(`https://dev.to/api/articles/amediocredev/${slug}`);

	if (!res.ok) return error(404, "Blog post not found");

	const { title, published_at, cover_image, tags, url, reading_time_minutes, body_markdown } = await res.json();

	const markedOptions = {
		smartLists: true,
		smartypants: true,
		async: true
	};

	const renderer = {
		image(href: string, _title: string | null, text: string) {
			return `<img src="${href}" alt="${text}" loading="lazy" />`;
		}
	};

	const marked = new Marked(
		markedHighlight({
			langPrefix: "hljs language-",
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : "plaintext";
				return hljs.highlight(code, { language }).value;
			}
		})
	).setOptions(markedOptions);
	marked.use({ renderer });

	const insaneOptions = {
		allowedAttributes: {
			span: ["class"],
			code: ["class"],
			h2: ["id"],
			img: ["src", "alt", "height", "width", "loading"]
		}
	};

	const cleanHTML = insane(await marked.parse(body_markdown), insaneOptions);
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
