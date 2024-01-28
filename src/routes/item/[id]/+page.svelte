<script lang="ts">
	import type { PageData } from "./$types";
	import Comment from "./comment.svelte";

	export let data: PageData;
</script>

{#if data.domain}
	<a href={data.url} target="_blank"
		><h1 class="mb-6 flex text-5xl font-bold md:text-6xl">{data.title}</h1></a
	>
{:else}
	<h1 class="mb-6 flex text-5xl font-bold md:text-6xl">{data.title}</h1>
{/if}
{#if data.content}
	<div class="content">
		{@html data.content}
	</div>
{/if}
<div class="my-6 flex space-x-2 overflow-x-scroll">
	{#if data.domain}
		<a href={data.url} target="_blank" class="whitespace-nowrap text-primary">{data.domain}</a>
		<p class="text-muted-foreground">・</p>
	{/if}
	{#if data.points}
		<p class="whitespace-nowrap">{data.points} {data.points === 1 ? "point" : "points"}</p>
		<p class="text-muted-foreground">・</p>
	{/if}
	{#if data.user}
		<a href={`/user/${data.user}`} class="whitespace-nowrap font-bold underline">{data.user}</a>
		<p class="text-muted-foreground">・</p>
	{/if}
	<p class="whitespace-nowrap text-muted-foreground">{data.time_ago}</p>
</div>
<hr />
<p class="my-6">{data.comments_count} {data.comments_count === 1 ? "comment" : "comments"}</p>

{#each data.comments as comment}
	<Comment {comment} />
{/each}

<style>
	.content :global(a) {
		text-decoration: underline !important;
	}

	.content :global(pre) {
		overflow-x: auto;
	}
</style>
