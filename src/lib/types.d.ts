export interface BlogPost {
	title: string;
	published_at: string;
	cover_image: string;
	tags: string[];
	url: string;
	reading_time_minutes: string;
	body_markdown: string;
}

export interface Project {
	title: string;
	slug: string;
	highlight: boolean;
	tags: string[];
	coverImage: {
		alt: string;
	};
	summary: string;
	links: string[];
}
