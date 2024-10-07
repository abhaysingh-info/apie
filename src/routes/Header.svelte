<script>
	import Logo from '$lib/components/logo.svelte';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { sidebarStore } from '$lib/services/sidebar';
	import { links } from '$lib/config';

	function openSidebar() {
		sidebarStore.set(true);
	}
</script>

<header class="border-b flex items-center justify-between px-4 py-3 sm:px-6">
	<a class="flex items-center gap-2" href="./#">
		<Logo />
		<span class="sr-only">APIE.AI</span>
	</a>
	<nav class="hidden lg:flex items-center gap-4 pr-8">
		{#each links as link}
			<a class="text-sm font-medium text-gray-600 hover:text-gray-900" href="./#">
				{link.title}
			</a>
		{/each}

	</nav>
	<div class="lg:hidden">
		<div>
			<button on:click={openSidebar} class="text-xl flex items-center justify-center cursor-pointer">
				<Fa icon={faBars} />
			</button>
		</div>
	</div>
</header>
