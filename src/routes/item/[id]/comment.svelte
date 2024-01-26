<script lang="ts">
	export let comment: {
		deleted?: boolean;
		user: string;
		time_ago: number;
		content: string;
		comments: any[];
	};

	export let index = 0;

	let open = index < 3;

	const count = (c: typeof comment) => {
		let totalCount = 1;

		if (c.comments && c.comments.length > 0) {
			for (const nestedComment of c.comments) {
				totalCount += count(nestedComment);
			}
		}

		return totalCount;
	};
</script>

<article class="comment border-t border-solid">
	<details bind:open>
		<summary class="list-none">
			<div class="meta-bar cursor-pointer py-4" role="button" tabindex="0">
				<span class="meta block text-sm">
					<a href="/user/{comment.user}" class="font-bold">{comment.user}</a>
					<span class="text-muted-foreground">・</span>
					<span class="text-muted-foreground">{comment.time_ago}</span>
					{#if comment.comments?.length > 0 && !open}
						<div class="inline-block">
							<span class="text-muted-foreground">・</span>
							<span class="text-muted-foreground">{count(comment)} more</span>
						</div>
					{/if}
				</span>
			</div>
		</summary>

		<div class="body overflow-wrap-break-word mb-4">
			{@html comment.content}
		</div>

		{#if comment.comments.length > 0}
			<ul class="children pl-4">
				{#each comment.comments as child}
					<li class="list-none"><svelte:self comment={child} index={index + 1} /></li>
				{/each}
			</ul>
		{/if}
	</details>
</article>

<style>
	.comment :global(a) {
		text-decoration: underline !important;
	}

	.meta-bar {
		background: 100% 50% no-repeat
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, .5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 15 12 9 18 15'%3E%3C/polyline%3E%3C/svg%3E");
		background-size: 1em 1em;
	}

	.comment details[open] > summary > .meta-bar {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, .5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
	}

	.comment details > summary::marker,
	.comment details > summary::-webkit-details-marker {
		display: none;
	}

	@media (min-width: 720px) {
		.comment .children {
			padding: 0 0 0 2em;
		}
	}

	.body :global(*) {
		overflow-wrap: break-word;
	}

	.comment :global(pre) {
		overflow-x: auto;
	}
</style>
