<script lang="ts">
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';

	export let ticket: IHelpdeskRowProps;

	export let status = ticket.status;
	export let reply = '';

	export let onSend = (status: string, reply: string) => {
		console.log(status, reply);
	};
</script>

<div class="grid grid-cols-12" id="message-reply">
	<div class="col-span-1"></div>
	<div class="col-span-10">
		<div>
			Relpy to: {ticket.UserProfile} - {ticket.subject} :-
		</div>
		<div>
			<textarea bind:value={reply} class="min-h-[15rem] w-full rounded-md border px-2 py-1"
			></textarea>
		</div>
		<div class="mt-4 flex justify-start gap-4">
			<select bind:value={status} class="rounded-md border px-3 py-2">
				<option>Open</option>
				<option>Pending</option>
				<option>Closed</option>
			</select>
			<button
				on:click={() => onSend(status, reply)}
				class="rounded-md bg-blue-500 px-4 py-2 text-white">Send</button
			>
		</div>
	</div>
</div>
