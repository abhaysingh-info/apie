<script lang="ts">
	import type { IConnectors } from './types';
	import Fa from 'svelte-fa';

	export let connector: IConnectors;
</script>

<div class="group relative rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer border-2 hover:border-indigo-900 shadow max-w-[26rem] max-h-[26rem] min-h-full">
	<div class="w-full flex flex-col justify-between rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer">
		<div class="p-6 flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl lg:rounded-2xl">
			{#if connector.icon}
				<Fa icon={connector.icon} class="hover:text-black text-3xl lg:text-5xl" style="color: {connector.iconColor}" />
			{:else if connector.image}
				<img src={connector.image} alt={connector.title} class="w-7 lg:w-12" />
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