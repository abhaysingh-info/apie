<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';
	import HelpdeskStatus from './helpdesk-status.svelte';
	export let props: IHelpdeskRowProps;
	export let isChecked: boolean = false;
	export let ticketBaseURL: string = '';
	export let onTicketClick: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={onTicketClick}
	class="grid w-full cursor-pointer grid-cols-12 items-center border px-1 py-3"
>
	<div class="col-span-3 flex items-center gap-2 pl-4">
		<div>
			<input type="checkbox" checked={isChecked} class="form-checkbox h-5 w-5 text-blue-600" />
		</div>
		<div class="font-semibold">
			<a href={ticketBaseURL + '/' + props.id} class="cursor-pointer">#{props.id}</a>
		</div>
		-
		<div class="font-bold uppercase">
			{props.domain}
		</div>
	</div>
	<div class="col-span-7 flex items-center gap-2">
		<div>
			[<span class="">{props.category}</span>]
		</div>
		-
		<div class="font-semibold">
			{props.email}
		</div>
		-
		<div>
			{props.subject}
		</div>
		-
		<div>
			<HelpdeskStatus status={props.status} />
		</div>
		<div
			class="flex h-6 w-5 items-center justify-center gap-2 rounded-full bg-neutral-500 text-xs text-neutral-100"
		>
			{props.messageCount}
		</div>
	</div>
	<div class="col-span-2">
		<div class="font-medium">
			<span class="">{new Date(props.lastUpdated).toLocaleString()}</span>
			|
			{new Date(props.originDate).toLocaleDateString()}
		</div>
	</div>
</div>
