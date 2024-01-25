import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
	const page = url.searchParams.get("p") || 1;
	return {
		page,
		items: await fetch(`https://api.hnpwa.com/v0/news/${page}.json`).then((r) => r.json())
	};
}) satisfies PageLoad;
