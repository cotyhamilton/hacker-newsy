<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import * as Tabs from "$lib/components/ui/tabs";
	// import { features } from "$lib/stores/features";
	import { Equal, Lightbulb, LightbulbOff } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";
</script>

<Sheet.Root>
	<Sheet.Trigger><Equal strokeWidth={1.55} /></Sheet.Trigger>
	<Sheet.Content>
		<Tabs.Root value="settings" class="w-[400px] standalone:pt-12">
			<Tabs.List>
				<Tabs.Trigger value="settings">settings</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="settings">
				<Button on:click={toggleMode} variant="outline" size="icon" class="my-4">
					<LightbulbOff
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Lightbulb
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
				<!-- <div class="my-4">
					<Label for="scroll" class="my-2 block">infinite scroll</Label>
					<Switch id="scroll" class="my-2 block" bind:checked={$features.infiniteScroll} />
				</div> -->
			</Tabs.Content>
		</Tabs.Root>
	</Sheet.Content>
</Sheet.Root>
