<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import { Lightbulb, LightbulbOff } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";
</script>

<header>
	<nav class="flex items-center justify-between px-2 py-6 md:px-6 lg:px-12">
		<div class="rounded-md bg-primary px-2 py-1.5">
			<a href="/" class="font-semibold text-primary-foreground">hn</a>
		</div>
		<div class="flex space-x-2 text-xl sm:space-x-4 md:space-x-8">
			<a href="/news" class={`${$page.url.pathname === "/news" ? "font-semibold" : ""}`}>top</a>
			<a href="/newest" class={`${$page.url.pathname === "/newest" ? "font-semibold" : ""}`}>new</a>
			<a href="/ask" class={`${$page.url.pathname === "/ask" ? "font-semibold" : ""}`}>ask</a>
			<a href="/show" class={`${$page.url.pathname === "/show" ? "font-semibold" : ""}`}>show</a>
		</div>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<LightbulbOff
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Lightbulb
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</nav>
</header>
