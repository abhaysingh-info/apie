<script lang="ts">
	import MessageHistory from './MessageHistory.svelte';

	import { page } from '$app/stores';
	import type { IHelpdeskThreadsProps } from '$lib/components/helpdesk';

	const _data: IHelpdeskThreadsProps[] = [
		{
			id: 1,
			domain: 'example.com',
			category: 'Technical Support',
			lastUpdated: new Date('2025-02-14T10:15:00.000Z'),
			originDate: new Date('2025-02-10T09:00:00.000Z'),
			email: 'user1@example.com',
			subject: 'Issue with login',
			status: 'Open',
			messageCount: 4,
			messageHistory: [
				{
					id: 101,
					message: 'I am unable to log in to my account.',
					date: new Date('2025-02-10T09:15:00.000Z'),
					from: 'user1@example.com',
					to: 'support@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 102,
					message: 'Please try resetting your password.',
					date: new Date('2025-02-10T10:00:00.000Z'),
					from: 'support@example.com',
					to: 'user1@example.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 103,
					message: 'Password reset did not work.',
					date: new Date('2025-02-11T08:30:00.000Z'),
					from: 'user1@example.com',
					to: 'support@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 104,
					message: 'We are looking into this issue.',
					date: new Date('2025-02-11T09:00:00.000Z'),
					from: 'support@example.com',
					to: 'user1@example.com',
					status: 'Replied',
					isRead: false
				}
			]
		},
		{
			id: 2,
			domain: 'anotherdomain.com',
			category: 'Billing',
			lastUpdated: new Date('2025-02-15T12:30:00.000Z'),
			originDate: new Date('2025-02-12T14:45:00.000Z'),
			email: 'user2@anotherdomain.com',
			subject: 'Invoice discrepancy',
			status: 'Closed',
			messageCount: 2,
			messageHistory: [
				{
					id: 201,
					message: 'My invoice shows an incorrect amount.',
					date: new Date('2025-02-12T15:00:00.000Z'),
					from: 'user2@anotherdomain.com',
					to: 'billing@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 202,
					message: 'We have corrected the invoice. Please check again.',
					date: new Date('2025-02-13T09:30:00.000Z'),
					from: 'billing@example.com',
					to: 'user2@anotherdomain.com',
					status: 'Resolved',
					isRead: true
				}
			]
		},
		{
			id: 3,
			domain: 'sampledomain.com',
			category: 'General Inquiry',
			lastUpdated: new Date('2025-02-16T11:00:00.000Z'),
			originDate: new Date('2025-02-14T10:20:00.000Z'),
			email: 'user3@sampledomain.com',
			subject: 'Product availability',
			status: 'In Progress',
			messageCount: 10,
			messageHistory: [
				{
					id: 301,
					message: 'Is product XYZ available?',
					date: new Date('2025-02-14T10:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 302,
					message: 'Yes, it is available. Would you like to place an order?',
					date: new Date('2025-02-14T11:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 303,
					message: 'I have a few more questions before ordering.',
					date: new Date('2025-02-14T11:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 304,
					message: 'Sure, please ask.',
					date: new Date('2025-02-14T12:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 305,
					message: 'What are the payment options?',
					date: new Date('2025-02-14T12:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 306,
					message: 'We accept credit cards, PayPal, and bank transfers.',
					date: new Date('2025-02-14T12:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 307,
					message: 'Can I get a discount on bulk purchase?',
					date: new Date('2025-02-14T12:45:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 308,
					message: 'Yes, discounts are available on bulk orders. Contact sales for details.',
					date: new Date('2025-02-14T13:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				},
				{
					id: 309,
					message: 'Great! I will contact sales. Thanks!',
					date: new Date('2025-02-14T13:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: false
				},
				{
					id: 310,
					message: "You're welcome!",
					date: new Date('2025-02-14T13:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				}
			]
		},
		{
			id: 4,
			domain: 'sampledomain.com',
			category: 'General Inquiry',
			lastUpdated: new Date('2025-02-16T11:00:00.000Z'),
			originDate: new Date('2025-02-14T10:20:00.000Z'),
			email: 'user3@sampledomain.com',
			subject: 'Product availability',
			status: 'In Progress',
			messageCount: 10,
			messageHistory: [
				{
					id: 301,
					message: 'Is product XYZ available?',
					date: new Date('2025-02-14T10:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 302,
					message: 'Yes, it is available. Would you like to place an order?',
					date: new Date('2025-02-14T11:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 303,
					message: 'I have a few more questions before ordering.',
					date: new Date('2025-02-14T11:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 304,
					message: 'Sure, please ask.',
					date: new Date('2025-02-14T12:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 305,
					message: 'What are the payment options?',
					date: new Date('2025-02-14T12:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 306,
					message: 'We accept credit cards, PayPal, and bank transfers.',
					date: new Date('2025-02-14T12:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 307,
					message: 'Can I get a discount on bulk purchase?',
					date: new Date('2025-02-14T12:45:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 308,
					message: 'Yes, discounts are available on bulk orders. Contact sales for details.',
					date: new Date('2025-02-14T13:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				},
				{
					id: 309,
					message: 'Great! I will contact sales. Thanks!',
					date: new Date('2025-02-14T13:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: false
				},
				{
					id: 310,
					message: "You're welcome!",
					date: new Date('2025-02-14T13:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				}
			]
		},
		{
			id: 5,
			domain: 'sampledomain.com',
			category: 'General Inquiry',
			lastUpdated: new Date('2025-02-16T11:00:00.000Z'),
			originDate: new Date('2025-02-14T10:20:00.000Z'),
			email: 'user3@sampledomain.com',
			subject: 'Product availability',
			status: 'In Progress',
			messageCount: 10,
			messageHistory: [
				{
					id: 301,
					message: 'Is product XYZ available?',
					date: new Date('2025-02-14T10:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 302,
					message: 'Yes, it is available. Would you like to place an order?',
					date: new Date('2025-02-14T11:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 303,
					message: 'I have a few more questions before ordering.',
					date: new Date('2025-02-14T11:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 304,
					message: 'Sure, please ask.',
					date: new Date('2025-02-14T12:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 305,
					message: 'What are the payment options?',
					date: new Date('2025-02-14T12:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 306,
					message: 'We accept credit cards, PayPal, and bank transfers.',
					date: new Date('2025-02-14T12:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 307,
					message: 'Can I get a discount on bulk purchase?',
					date: new Date('2025-02-14T12:45:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 308,
					message: 'Yes, discounts are available on bulk orders. Contact sales for details.',
					date: new Date('2025-02-14T13:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				},
				{
					id: 309,
					message: 'Great! I will contact sales. Thanks!',
					date: new Date('2025-02-14T13:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: false
				},
				{
					id: 310,
					message: "You're welcome!",
					date: new Date('2025-02-14T13:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				}
			]
		},
		{
			id: 6,
			domain: 'sampledomain.com',
			category: 'General Inquiry',
			lastUpdated: new Date('2025-02-16T11:00:00.000Z'),
			originDate: new Date('2025-02-14T10:20:00.000Z'),
			email: 'user3@sampledomain.com',
			subject: 'Product availability',
			status: 'In Progress',
			messageCount: 10,
			messageHistory: [
				{
					id: 301,
					message: 'Is product XYZ available?',
					date: new Date('2025-02-14T10:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 302,
					message: 'Yes, it is available. Would you like to place an order?',
					date: new Date('2025-02-14T11:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 303,
					message: 'I have a few more questions before ordering.',
					date: new Date('2025-02-14T11:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 304,
					message: 'Sure, please ask.',
					date: new Date('2025-02-14T12:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 305,
					message: 'What are the payment options?',
					date: new Date('2025-02-14T12:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 306,
					message: 'We accept credit cards, PayPal, and bank transfers.',
					date: new Date('2025-02-14T12:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 307,
					message: 'Can I get a discount on bulk purchase?',
					date: new Date('2025-02-14T12:45:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 308,
					message: 'Yes, discounts are available on bulk orders. Contact sales for details.',
					date: new Date('2025-02-14T13:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				},
				{
					id: 309,
					message: 'Great! I will contact sales. Thanks!',
					date: new Date('2025-02-14T13:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: false
				},
				{
					id: 310,
					message: "You're welcome!",
					date: new Date('2025-02-14T13:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				}
			]
		},
		{
			id: 7,
			domain: 'sampledomain.com',
			category: 'General Inquiry',
			lastUpdated: new Date('2025-02-16T11:00:00.000Z'),
			originDate: new Date('2025-02-14T10:20:00.000Z'),
			email: 'user3@sampledomain.com',
			subject: 'Product availability',
			status: 'In Progress',
			messageCount: 10,
			messageHistory: [
				{
					id: 301,
					message: 'Is product XYZ available?',
					date: new Date('2025-02-14T10:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 302,
					message: 'Yes, it is available. Would you like to place an order?',
					date: new Date('2025-02-14T11:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 303,
					message: 'I have a few more questions before ordering.',
					date: new Date('2025-02-14T11:30:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 304,
					message: 'Sure, please ask.',
					date: new Date('2025-02-14T12:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 305,
					message: 'What are the payment options?',
					date: new Date('2025-02-14T12:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 306,
					message: 'We accept credit cards, PayPal, and bank transfers.',
					date: new Date('2025-02-14T12:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: true
				},
				{
					id: 307,
					message: 'Can I get a discount on bulk purchase?',
					date: new Date('2025-02-14T12:45:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: true
				},
				{
					id: 308,
					message: 'Yes, discounts are available on bulk orders. Contact sales for details.',
					date: new Date('2025-02-14T13:00:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				},
				{
					id: 309,
					message: 'Great! I will contact sales. Thanks!',
					date: new Date('2025-02-14T13:15:00.000Z'),
					from: 'user3@sampledomain.com',
					to: 'info@example.com',
					status: 'Sent',
					isRead: false
				},
				{
					id: 310,
					message: "You're welcome!",
					date: new Date('2025-02-14T13:30:00.000Z'),
					from: 'info@example.com',
					to: 'user3@sampledomain.com',
					status: 'Replied',
					isRead: false
				}
			]
		}
	];
	let id = parseInt(($page.params || {}).id || '0');
	const data = _data[id];
</script>

<section class="py-6">
	<div class="flex gap-2 px-4 text-3xl lg:text-4xl">
		<h1 class="font-semibold">#{data.id} - {data.subject}</h1>
		-
		<h1 class="font-bold lowercase">{data.domain}</h1>
	</div>
	<div class="mt-12">
		<div class="ticket-actions flex"></div>
		<div class="flex flex-col gap-4 md:gap-6 lg:gap-8">
			{#each data.messageHistory as messageHistory}
				<MessageHistory {messageHistory}></MessageHistory>
			{/each}
		</div>
	</div>
</section>
