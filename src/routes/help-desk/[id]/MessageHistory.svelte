<script lang="ts">
	import { page } from '$app/stores';
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';

	export let messageHistory: IHelpdeskRowProps;
</script>

<section class="flex flex-col gap-4 border-b pb-6 md:pb-12 lg:pb-16">
	<div class="grid grid-cols-12">
		<div class="col-span-3 flex items-center justify-center md:col-span-2 lg:col-span-1">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-center text-lg text-white md:h-12 md:w-12 lg:h-14 lg:w-14"
			>
				<span>{(messageHistory.requester_email || '').slice(0, 2).toUpperCase()}</span>
			</div>
		</div>
		<div class="col-span-9 md:col-span-10 lg:col-span-11">
			<div>
				<div class="font-bold">{messageHistory.requester_email || ''}</div>
				<div class="text-sm font-extralight text-gray-500">
					{new Date(messageHistory.updated_at * 1000).toLocaleString()}
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-12">
		<div class="col-span-1"></div>
		<div class="col-span-10">
			<div class="h-full w-full break-all rounded-lg bg-gray-100 p-4">
				{#each (messageHistory.description || '').split('\n') as message}
					<p>{message}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
