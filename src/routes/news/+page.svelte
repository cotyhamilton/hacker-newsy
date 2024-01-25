<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

{#each data.items as item, i}
	<div class="flex py-2">
		<span class="text-xl text-slate-500">{(+data.page - 1) * 30 + i + 1}. </span>
		<div class="ms-4">
			<a href={`/item/${item.id}`} class="text-xl font-semibold">{item.title}</a>
			<div class="flex space-x-2">
				<a href={item.url} target="_blank" class="text-[#ff6600]">{item.domain}</a>
				<span class="text-slate-300">&#x2022;</span>
				<span>{item.points} points</span>
				<span class="text-slate-300">&#x2022;</span>
				<span>by {item.user}</span>
				<span class="text-slate-300">&#x2022;</span>
				<span class="text-slate-500">{item.time_ago}</span>
				<span class="text-slate-300">&#x2022;</span>
				<span class="text-slate-500">{item.comments_count} comments</span>
			</div>
		</div>
	</div>
{/each}

<a href={`/news?p=${+data.page + 1}`}>more</a>
