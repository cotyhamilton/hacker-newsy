<script lang="ts">
	import { page } from "$app/stores";
	import * as Pagination from "$lib/components/ui/pagination";
	import { infiniteScroll } from "$lib/stores/features";
	import { items, loadMoreItems, pageIndex } from "$lib/stores/items";
	import { ChevronLeft, ChevronRight } from "lucide-svelte";
	import { onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	let { category } = $page.params;
	let loadingRef: HTMLElement | undefined;

	let loadingObserver: IntersectionObserver;

	onMount(() => {
		loadingObserver = new IntersectionObserver((entries) => {
			const element = entries[0];

			if (element.isIntersecting) {
				loadMoreItems(category);
			}
		});
	});

	const initializeInfiniteScroll = async () => {
		if (!loadingRef) {
			return;
		}
		loadingObserver.observe(loadingRef);
	};

	$: {
		if (loadingRef) {
			loadingObserver.unobserve(loadingRef);
		}
		category = $page.params.category;
		$items = data.items;
		$pageIndex = +($page.url.searchParams.get("p") || 1);
		if ($infiniteScroll) {
			initializeInfiniteScroll();
		}
	}
</script>

<p class="mb-8 text-3xl font-semibold sm:text-4xl">
	{new Date().toLocaleDateString("en-us", {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric"
	})}
</p>
<hr />
{#each $items as item, i}
	<div class="mt-2 flex py-4">
		<p class="text-xl text-muted-foreground">{(+data.page - 1) * 30 + i + 1}.</p>
		<div class="ms-4">
			<a href={`/item/${item.id}`} class="break-words text-xl font-semibold"
				><h2>{item.title}</h2></a
			>
			<div class="flex flex-auto flex-wrap space-x-1">
				{#if item.domain}
					<a href={item.url} target="_blank" class="text-sm text-primary">{item.domain}</a>
					<p class="text-muted-foreground">・</p>
				{/if}
				{#if item.points}
					<p class="text-sm">{item.points} {item.points === 1 ? "point" : "points"}</p>
					<p class="text-sm text-muted-foreground">・</p>
				{/if}
				{#if item.user}
					<a href={`/user/${item.user}`} class="whitespace-nowrap text-sm font-bold underline"
						>{item.user}</a
					>
					<p class="text-muted-foreground">・</p>
				{/if}
				{#if item.time_ago}
					<p class="text-sm text-muted-foreground">{item.time_ago}</p>
					<p class="text-muted-foreground">・</p>
				{/if}
				{#if item.comments_count >= 0}
					<p class="text-sm text-muted-foreground">
						{item.comments_count}
						{item.comments_count === 1 ? "comment" : "comments"}
					</p>
				{/if}
			</div>
		</div>
	</div>
{/each}

{#if $infiniteScroll}
	<div class="mt-12 flex justify-center text-muted-foreground" bind:this={loadingRef}>
		you've reached the bottom 🤓
	</div>
{/if}

<!-- pagination -->
{#if !$infiniteScroll && data?.items?.length && category !== "jobs"}
	<Pagination.Root
		count={category === "news" || category === "newest" ? 300 : 60}
		perPage={30}
		page={+($page.url.searchParams.get("p") || 1)}
		let:pages
		let:currentPage
	>
		<Pagination.Content class="mt-12">
			{#if +data.page && +data.page > 1}
				<Pagination.Item>
					<a href={`/${category}?p=${+data.page - 1}`}
						><Pagination.PrevButton>
							<ChevronLeft class="h-4 w-4" />
							<span class="hidden sm:block">Previous</span>
						</Pagination.PrevButton></a
					>
				</Pagination.Item>
			{:else}
				<Pagination.PrevButton />
			{/if}
			{#each pages as page (page.key)}
				{#if page.type === "ellipsis"}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					<Pagination.Item>
						<a href={`/${category}?p=${page.value}`}>
							<Pagination.Link {page} isActive={currentPage == page.value}>
								{page.value}
							</Pagination.Link>
						</a>
					</Pagination.Item>
				{/if}
			{/each}
			{#if ((category === "news" || category === "newest") && +data.page < 10) || +data.page < 2}
				<Pagination.Item>
					<a href={`/${category}?p=${+data.page + 1}`}
						><Pagination.NextButton>
							<span class="hidden sm:block">Next</span>
							<ChevronRight class="h-4 w-4" />
						</Pagination.NextButton></a
					>
				</Pagination.Item>
			{:else}
				<Pagination.NextButton />
			{/if}
		</Pagination.Content>
	</Pagination.Root>
{/if}
