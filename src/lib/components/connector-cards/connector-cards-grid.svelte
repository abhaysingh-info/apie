<script lang="ts">

	import type { IConnectors } from '$lib/components/connector-cards/types';
	import Connector from "./connector-cards.svelte"

	export let connectors: IConnectors[]
</script>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
	{#each connectors as connector}
		<div>
			<Connector {connector} />
		</div>
		{/each}
</div>