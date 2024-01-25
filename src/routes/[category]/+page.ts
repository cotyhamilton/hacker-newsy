import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url, params }) => {
	const page = url.searchParams.get("p") || 1;
	return {
		page,
		items: await fetch(`https://api.hnpwa.com/v0/${params.category}/${page}.json`).then((r) =>
			r.json()
		)
	};
}) satisfies PageLoad;
