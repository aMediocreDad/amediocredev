interface ImportMeta {
	env: {
		VITE_SANITY_PROJECT_ID: string;
	};
}

declare module "insane" {
	declare function sanitize(html: string, options: insane.Options): string;

	export default sanitize;
}

declare global {
	namespace App {
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<unknown>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
