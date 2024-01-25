<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1 class="mb-6 flex text-6xl font-bold">{data.id}</h1>
<h1 class="mb-6 flex text-2xl font-bold">{data.created}</h1>
<div class="my-6">
	<a
		href={`https://news.ycombinator.com/submitted?id=${data.id}`}
		target="_blank"
		class="block text-lg font-semibold underline">submissions</a
	>
	<a
		href={`https://news.ycombinator.com/threads?id=${data.id}`}
		target="_blank"
		class="block text-lg font-semibold underline">comments</a
	>
	<a
		href={`https://news.ycombinator.com/favorites?id=${data.id}`}
		target="_blank"
		class="block text-lg font-semibold underline">favorites</a
	>
</div>
