import type { PageLoad } from "./$types";
import "../../../styles/blog.css";
import "../../../styles/hljs.css";

export const load: PageLoad = async ({ data }) => {
	return data;
};

export const csr = false;
