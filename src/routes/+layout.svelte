<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.pcss";
	import Header from "./header.svelte";
</script>

<Header />
<div class="container mx-auto mb-24 max-w-[80ch] px-6">
	<slot />
</div>

<ModeWatcher />
