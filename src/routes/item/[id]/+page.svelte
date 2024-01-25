<script lang="ts">
	import type { PageData } from "./$types";
	import Comment from "./comment.svelte";

	export let data: PageData;
</script>

<h1 class="mb-6 flex text-6xl font-bold">{data.title}</h1>
<div class="my-6 flex space-x-2">
	<a href={data.url} target="_blank" class="text-[#ff6600]">{data.domain}</a>
	<span class="text-slate-300">&#x2022;</span>
	<span>{data.points} points</span>
	<span class="text-slate-300">&#x2022;</span>
	<span>by {data.user}</span>
	<span class="text-slate-300">&#x2022;</span>
	<span class="text-slate-500">{data.time_ago}</span>
</div>
<hr />
<p class="my-6">{data.comments_count} comments</p>

{#each data.comments as comment}
	<Comment {comment} />
{/each}
