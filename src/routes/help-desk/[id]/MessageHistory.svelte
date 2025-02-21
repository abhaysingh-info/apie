<script lang="ts">
	import { page } from '$app/stores';
	import type { IHelpdeskMessageHistory } from '$lib/components/helpdesk';

	export let messageHistory: IHelpdeskMessageHistory;
</script>

<section class="border-b pb-6 md:pb-12 lg:pb-16">
	<div class="grid grid-cols-12">
		<div class="col-span-1 flex items-center justify-center">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full bg-slate-400 text-center text-xl text-white lg:h-20 lg:w-20"
			>
				<span>{messageHistory.from.slice(0, 2).toUpperCase()}</span>
			</div>
		</div>
		<div class="col-span-10">
			<div>
				<div class="font-bold">{messageHistory.from}</div>
				<div class="text-sm font-extralight text-gray-500">
					{new Date(messageHistory.date).toLocaleString()}
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-12">
		<div class="col-span-1"></div>
		<div class="col-span-10">
			<div class="rounded-lg bg-gray-100 p-4">
				{messageHistory.message}
			</div>
		</div>
	</div>
</section>
