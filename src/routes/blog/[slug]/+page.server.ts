import { error } from "@sveltejs/kit";

import insane from "insane";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import type { BlogPost } from "$lib/types.js";

export async function load({ fetch, params: { slug } }) {
	const insaneOptions = {
		allowedAttributes: {
			span: ["class"],
			code: ["class"],
			h2: ["id"],
			img: ["src", "alt", "height", "width", "loading"]
		}
	};

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

	const res = await fetch(`https://dev.to/api/articles/amediocredev/${slug}`, {
		headers: {
			// Dev.to will return a 403 if the user agent is not a browser
			"User-Agent":
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
		}
	});

	if (!res.ok) throw error(res.status, res.statusText);

	try {
		const { title, published_at, cover_image, tags, url, reading_time_minutes, body_markdown } = await res.json();

		const cleanHTML = insane(await marked.parse(body_markdown), insaneOptions);
		const publishDate = new Date(published_at);
		const publishedIso = publishDate.toISOString();
		const published = publishDate.toLocaleDateString();

		const post: BlogPost = {
			title,
			published,
			publishedIso,
			cover_image,
			tags,
			url,
			reading_time_minutes,
			cleanHTML
		};

		return {
			post
		};
	} catch (e) {
		console.error(e);
		throw error(500, "Failed to create the blog post for you.");
	}
}
