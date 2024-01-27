import { get, writable } from "svelte/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const items = writable<any[]>([]);
export const pageIndex = writable(1);

export const loadMoreItems = async (category: string) => {
	const p = get(pageIndex);
	const res = await fetch(`https://api.hnpwa.com/v0/${category}/${p + 1}.json`);
	const data = await res.json();
	if (data.length) {
		items.update((prev) => [...prev, ...data]);
		pageIndex.update((prev) => prev + 1);
	}
};
