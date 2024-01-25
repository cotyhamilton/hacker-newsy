import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
	return await fetch(`https://api.hnpwa.com/v0/user/${params.id}.json`).then((r) => r.json());
}) satisfies PageLoad;
