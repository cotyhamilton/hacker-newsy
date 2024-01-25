<script lang="ts">
	import "../app.pcss";
	import Header from "./header.svelte";
</script>

<Header />
<div class="container mx-auto mb-24 max-w-[80ch]">
	<slot />
</div>
