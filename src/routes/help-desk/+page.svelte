<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';
	import HelpdeskRow from '$lib/components/helpdesk/helpdesk-row.svelte';
	import { getAllTickets } from '$lib/services/ticket.service';
	import { onMount } from 'svelte';

	let helpdeskData: IHelpdeskRowProps[] = [];

	onMount(async () => {
		const tickets = await getAllTickets();
		helpdeskData.push(...tickets);
		helpdeskData = helpdeskData;
	});
</script>

<section class="py-6">
	<div class="px-4">
		<h1 class="text-3xl font-semibold lg:text-4xl">Tickets</h1>
	</div>
	<div class="mt-12">
		<div class="ticket-actions flex"></div>
		<div class="flex flex-col">
			{#each helpdeskData as props}
				<HelpdeskRow
					{props}
					ticketBaseURL="/help-desk"
					onTicketClick={function () {
						goto(`/help-desk/${props.SortProfile}`);
					}}
				/>
			{/each}
		</div>
	</div>
</section>
