/// <reference types="@sveltejs/kit" />
/// <reference types="insane" />

interface ImportMeta {
	env: {
		VITE_SANITY_PROJECT_ID: string;
	};
}

declare module "insane" {
	declare function sanitize(html: string, options: insane.Options): string;

	export default sanitize;
}
