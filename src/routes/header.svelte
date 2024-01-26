<script lang="ts">
	import { page } from "$app/stores";
	import Settings from "./settings.svelte";
</script>

<header>
	<nav class="flex items-center justify-between px-2 py-6 sm:px-4 md:px-6 lg:px-12">
		<div class="rounded-md bg-primary px-2 py-1.5">
			<a href="/" class="font-semibold text-primary-foreground">hn</a>
		</div>
		<div class="flex space-x-2 text-xl sm:space-x-4 md:space-x-8">
			<a href="/news" class={`${$page.url.pathname === "/news" ? "font-semibold" : ""}`}>top</a>
			<a href="/newest" class={`${$page.url.pathname === "/newest" ? "font-semibold" : ""}`}>new</a>
			<a href="/ask" class={`${$page.url.pathname === "/ask" ? "font-semibold" : ""}`}>ask</a>
			<a href="/show" class={`${$page.url.pathname === "/show" ? "font-semibold" : ""}`}>show</a>
		</div>
		<Settings />
	</nav>
</header>
