<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<p class="mb-8 text-4xl font-semibold">
	{new Date().toLocaleDateString("en-us", {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric"
	})}
</p>
<hr />
{#each data.items as item, i}
	<div class="mt-2 flex py-4">
		<p class="text-xl text-muted-foreground">{(+data.page - 1) * 30 + i + 1}.</p>
		<div class="ms-4">
			<a href={`/item/${item.id}`} class="break-words text-xl font-semibold"
				><h2>{item.title}</h2></a
			>
			<div class="flex flex-auto flex-wrap space-x-1">
				{#if item.domain}
					<a href={item.url} target="_blank" class="text-sm text-primary">{item.domain}</a>
					<p class="text-muted-foreground">&#x2022;</p>
				{/if}
				<p class="text-sm">{item.points} points</p>
				<p class="text-sm text-muted-foreground">&#x2022;</p>
				<a href={`/user/${item.user}`} class="whitespace-nowrap text-sm font-bold underline"
					>{item.user}</a
				>
				<p class="text-muted-foreground">&#x2022;</p>
				<p class="text-sm text-muted-foreground">{item.time_ago}</p>
				<p class="text-muted-foreground">&#x2022;</p>
				<p class="text-sm text-muted-foreground">{item.comments_count} comments</p>
			</div>
		</div>
	</div>
{/each}

<div class="ms-auto flex">
	<a href={`/news?p=${+data.page + 1}`} class="ms-auto">next ></a>
</div>
