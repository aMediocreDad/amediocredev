declare module "insane" {
	type Options = Record<string, unknown>;

	function sanitize(html: string, options: Options): string;

	export default sanitize;
}
