export interface BlogPost {
	title: string;
	published: Date;
	publishedIso: string;
	cover_image: string;
	tags: string[];
	url: string;
	reading_time_minutes: string;
	cleanHTML: string;
}

export interface Project {
	title: string;
	slug: string;
	highlight: boolean;
	tags: string[];
	coverImage: {
		url: string;
		alt: string;
	};
	summary: string;
	links: string[];
}
