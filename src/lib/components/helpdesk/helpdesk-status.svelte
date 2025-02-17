<script lang="ts">
	export let status: string;

	const statusColorMap: {
		[key: string]: string;
	} = {
		Open: 'bg-blue-500 text-white',
		Pending: 'bg-yellow-500 text-black',
		Closed: 'bg-green-500 text-black',
		Resolved: 'bg-green-500 text-white',
		'In Progress': 'bg-yellow-500 text-black'
	};
</script>

<div class="flex items-center gap-2">
	<div class="rounded-full px-2 py-1 text-xs {statusColorMap[status]}">{status}</div>
</div>
