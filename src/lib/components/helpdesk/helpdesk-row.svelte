<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IHelpdeskRowProps } from '$lib/components/helpdesk';
	import HelpdeskStatus from './helpdesk-status.svelte';
	export let props: IHelpdeskRowProps;
	export let isChecked: boolean = false;
	export let ticketBaseURL: string = '';
	export let onTicketClick: () => void;

	const updatedAt = new Date(props.updated_at * 1000);
	const createdAt = new Date(props.created_at * 1000);

	function getUpdateDisplayString(date: Date): string {
		const today = new Date();
		if (
			today.getDate() === date.getDate() &&
			today.getMonth() === date.getMonth() &&
			today.getFullYear() === date.getFullYear()
		) {
			return `${date.getHours()}:${date.getMinutes()}`;
		}

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	function showDots(maxLength: number, stringLength: number) {
		return stringLength > maxLength ? '...' : '';
	}

	const emailUserName = props.requester_email.split('@')[0];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={onTicketClick}
	class="hidden w-full cursor-pointer grid-cols-12 items-center border px-1 py-3 xl:grid"
>
	<div class="flex items-center gap-2 pl-4 md:col-span-2">
		<div>
			<input type="checkbox" checked={isChecked} class="form-checkbox h-5 w-5 text-blue-600" />
		</div>
		<div class="font-semibold">
			<a href={ticketBaseURL + '/' + props.UserProfile} class="cursor-pointer"
				>#{props.UserProfile}</a
			>
		</div>

		<div class="hidden font-bold uppercase 2xl:inline-block">
			- {props.domain}
		</div>
	</div>
	<div class="col-span-8 flex items-center gap-2">
		<div>
			[<span class="">{props.category || 'Uncategorized'}</span>]
		</div>
		-
		<div class="break-all font-semibold">
			<span class="hidden 2xl:inline-block">
				{props.requester_email}
			</span>
			<span class="2xl:hidden">
				{emailUserName.slice(0, 30)}{showDots(30, emailUserName.length)}
			</span>
		</div>
		-
		<div class="break-all">
			{props.subject}
		</div>
		-
		<div>
			<HelpdeskStatus status={props.status} />
		</div>
		<div
			class="flex h-6 w-5 items-center justify-center gap-2 rounded-full bg-neutral-500 text-xs text-neutral-100"
		>
			{props.msg_cnt}
		</div>
	</div>
	<div class="col-span-2">
		<div class="font-medium">
			<span class="">{new Date(props.updated_at * 1000).toLocaleString()}</span>
			|
			{new Date(props.created_at * 1000).toLocaleDateString()}
		</div>
	</div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="grid cursor-pointer grid-cols-12 border border-neutral-200 px-1 py-2 text-sm xl:hidden"
	on:click={onTicketClick}
>
	<div class=" col-span-1 flex items-center justify-start md:justify-center">
		<input type="checkbox" checked={isChecked} class="form-checkbox h-5 w-5 text-blue-600" />
	</div>
	<div class="col-span-9 text-wrap break-all font-bold">
		<div class="flex gap-4 break-all">
			<span>
				<span class="hidden md:inline"> {emailUserName.slice(0, 25)} -</span>
				<span class="md:font-light">{props.subject}</span>
			</span>
			<div class="hidden gap-2 md:flex">
				<HelpdeskStatus status={props.status} />
				<div
					class="flex h-6 w-4 items-center justify-center gap-2 rounded-full bg-neutral-500 text-xs text-neutral-100"
				>
					{props.msg_cnt}
				</div>
			</div>
		</div>
		<div class=" font-extralight">
			[{props.category || 'Uncategorized'}] - {props.org_subject.slice(0, 40)}{showDots(
				40,
				props.org_subject.length
			)}
		</div>
		<div class="hidden font-extralight md:block">
			- {(props.description || '[Empty]').slice(0, 150)}{showDots(150, props.description.length)}
		</div>
		<div class="flex items-center gap-2 md:hidden">
			<HelpdeskStatus status={props.status} />
			<div
				class="flex h-6 w-4 items-center justify-center gap-2 rounded-full bg-neutral-500 text-xs text-neutral-100"
			>
				{props.msg_cnt}
			</div>
		</div>
	</div>
	<div class="col-span-2 flex justify-end">
		<div>
			<span class="">{getUpdateDisplayString(updatedAt)}</span>
		</div>
	</div>
</div>
