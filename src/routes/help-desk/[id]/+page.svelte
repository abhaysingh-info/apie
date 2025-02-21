<script lang="ts">
	import MessageHistory from './MessageHistory.svelte';

	import { page } from '$app/stores';
	import type { IHelpdeskThreadsProps } from '$lib/components/helpdesk';
	import { getInitialMessageById, getTicketChatById } from '$lib/services/ticket.service';
	import { onMount } from 'svelte';
	import HelpdeskStatus from '$lib/components/helpdesk/helpdesk-status.svelte';
	import MessageReply from './MessageReply.svelte';
	import Fa from 'svelte-fa';
	import { faArrowLeft, faReply } from '@fortawesome/free-solid-svg-icons';

	let id = ($page.params || {}).id || '0';
	let data: IHelpdeskThreadsProps = {} as IHelpdeskThreadsProps;

	onMount(async () => {
		const ticket = await getInitialMessageById(id);
		data = ticket as any;

		const chatHistory = await getTicketChatById(id);
		data.messageHistory = chatHistory;
	});

	function goBack() {
		history.back();
	}

	function onSubmit(status: string, reply: string) {
		console.log(status, reply);
		alert('Message sent');
	}
</script>

<section class="py-6">
	{#if data}
		<div class="grid grid-cols-12">
			<div class="col-span-[0] md:col-span-1"></div>
			<div class="col-span-11 flex justify-between text-2xl md:col-span-10 lg:text-3xl">
				<div class="flex flex-row gap-4">
					<div>
						<button
							class="text-blue flex items-center gap-2 rounded-full border border-blue-500 px-2 py-2 text-lg text-blue-500 hover:bg-blue-500 hover:text-white"
							on:click={goBack}
						>
							<Fa icon={faArrowLeft} />
						</button>
					</div>
					<div class="flex flex-wrap gap-2 text-wrap">
						<h1 class="font-semibold">
							<span class="uppercase"> #{data.UserProfile}</span> - {data.subject}
						</h1>
						-
						<h1 class="font-bold lowercase">{data.domain}</h1>
						<HelpdeskStatus status={data.status} />
						<div
							class="flex items-center justify-center gap-2 rounded-full bg-neutral-500 px-2 text-sm text-neutral-100"
						>
							{data.msg_cnt}
						</div>
					</div>
				</div>
				<div>
					<!-- add a reply link with href to ./#message-reply -->
					<a href="#message-reply">
						<button
							class=" flex min-w-min items-center justify-center gap-2 rounded-md bg-blue-500 px-2 py-1 text-lg text-white"
						>
							<Fa icon={faReply} class="text-white" />
							Reply
						</button>
					</a>
				</div>
			</div>
		</div>
		<div class="mt-12">
			<div class="ticket-actions flex"></div>
			<div class="flex flex-col gap-4 md:gap-6 lg:gap-8">
				<MessageHistory messageHistory={data}></MessageHistory>
				{#each data?.messageHistory || [] as messageHistory}
					<MessageHistory {messageHistory}></MessageHistory>
				{/each}
			</div>
			<div class="flex flex-col py-6">
				<MessageReply onSend={onSubmit} ticket={data} />
			</div>
		</div>
	{:else}
		<div class="flex h-96 items-center justify-center">
			<div class="text-2xl font-semibold text-gray-500">Loading...</div>
		</div>
	{/if}
</section>
