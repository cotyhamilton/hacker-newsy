<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.pcss";
	import Header from "./header.svelte";
</script>

<Header />
<div
	class="container mx-auto mb-12 mt-28 max-w-[80ch] px-6 pb-[env(safe-area-inset-bottom)] standalone:mt-[calc(env(safe-area-inset-top,-7rem)+7rem)]"
>
	<slot />
</div>

<ModeWatcher />
