<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';
	import HelpdeskRow from '$lib/components/helpdesk/helpdesk-row.svelte';

	export let helpdeskData: IHelpdeskRowProps[] = [
		{
			id: 1,
			domain: 'example.com',
			category: 'Technical Support',
			lastUpdated: new Date('2024-07-26T10:00:00.000Z'),
			originDate: new Date('2024-07-25T09:00:00.000Z'),
			email: 'support@example.com',
			subject: 'Issue with login',
			status: 'Open',
			messageCount: 3
		},
		{
			id: 2,
			domain: 'anothersite.net',
			category: 'Billing',
			lastUpdated: new Date('2024-07-26T14:30:00.000Z'),
			originDate: new Date('2024-07-24T11:15:00.000Z'),
			email: 'billing@anothersite.net',
			subject: 'Payment failed',
			status: 'Pending',
			messageCount: 2
		},
		{
			id: 3,
			domain: 'mysite.org',
			category: 'Feature Request',
			lastUpdated: new Date('2024-07-27T08:45:00.000Z'),
			originDate: new Date('2024-07-20T16:20:00.000Z'),
			email: 'feedback@mysite.org',
			subject: 'New search functionality',
			status: 'Closed',
			messageCount: 1
		},
		{
			id: 4,
			domain: 'helpcenter.io',
			category: 'General Inquiry',
			lastUpdated: new Date('2024-07-27T12:00:00.000Z'),
			originDate: new Date('2024-07-26T07:30:00.000Z'),
			email: 'info@helpcenter.io',
			subject: 'How to reset password',
			status: 'Resolved',
			messageCount: 4
		},
		{
			id: 5,
			domain: 'website.co',
			category: 'Bug Report',
			lastUpdated: new Date('2024-07-28T09:15:00.000Z'),
			originDate: new Date('2024-07-27T15:40:00.000Z'),
			email: 'bugs@website.co',
			subject: 'Broken link on homepage',
			status: 'In Progress',
			messageCount: 2
		},
		{
			id: 6,
			domain: 'example.com',
			category: 'Technical Support',
			lastUpdated: new Date('2024-07-29T11:00:00.000Z'),
			originDate: new Date('2024-07-28T10:00:00.000Z'),
			email: 'support2@example.com',
			subject: 'Slow loading times',
			status: 'Open',
			messageCount: 3
		},
		{
			id: 7,
			domain: 'anothersite.net',
			category: 'Billing',
			lastUpdated: new Date('2024-07-29T15:30:00.000Z'),
			originDate: new Date('2024-07-27T12:15:00.000Z'),
			email: 'billing2@anothersite.net',
			subject: 'Incorrect charge',
			status: 'Pending',
			messageCount: 2
		}
	];
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
						goto(`/help-desk/${props.id}`);
					}}
				/>
			{/each}
		</div>
	</div>
</section>
