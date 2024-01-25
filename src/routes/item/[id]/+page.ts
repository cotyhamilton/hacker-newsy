import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
	return await fetch(`https://api.hnpwa.com/v0/item/${params.id}.json`).then((r) => r.json());
}) satisfies PageLoad;
