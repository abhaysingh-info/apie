<script lang="ts">
	import type { IConnectors } from './types';
	import Fa from 'svelte-fa';

	export let connector: IConnectors;
</script>

<div class="group relative rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer overflow-hidden border-2 hover:border-indigo-900 max-w-[26rem] min-h-full">
	<div class="z-10 w-full flex flex-col justify-between gap-2 rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer overflow-hidden">
		<div class="p-8 flex items-center justify-center">
			{#if connector.icon}
				<Fa icon={connector.icon} class="hover:text-black text-4xl" style="color: {connector.iconColor}" />
			{:else if connector.image}
				<img src={connector.image} alt={connector.title} class="h-12 w-12" />
			{/if}
		</div>
		<div class="h-full relative p-4 text-center text-gray-600 font-semibold group-hover:text-black border-t flex items-center justify-center">
			<div>
				{connector.title}
			</div>
		</div>
	</div>
</div>


<style>

</style>