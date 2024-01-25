<script lang="ts">
	import type { PageData } from "./$types";
	import Comment from "./comment.svelte";

	export let data: PageData;

	console.log({ data });
</script>

<h1 class="mb-6 flex text-6xl font-bold">{data.title}</h1>
{#if data.content}
	{@html data.content}
{/if}
<div class="my-6 flex space-x-2 overflow-x-scroll">
	{#if data.domain}
		<a href={data.url} target="_blank" class="whitespace-nowrap text-primary">{data.domain}</a>
		<p class="text-muted-foreground">&#x2022;</p>
	{/if}
	<p class="whitespace-nowrap">{data.points} points</p>
	<p class="text-muted-foreground">&#x2022;</p>
	<a href={`/user/${data.user}`} class="whitespace-nowrap font-bold underline">{data.user}</a>
	<p class="text-muted-foreground">&#x2022;</p>
	<p class="whitespace-nowrap text-muted-foreground">{data.time_ago}</p>
</div>
<hr />
<p class="my-6">{data.comments_count} comments</p>

{#each data.comments as comment}
	<Comment {comment} />
{/each}
