<script lang="ts">
	import { sidebarStore } from '$lib/services/sidebar';
	import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
	import Logo from '$lib/components/logo.svelte';
	import Fa from 'svelte-fa';
	import { faHeadphones, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

	const links = [
		{ title: 'Home', icon: faHome },
		{ title: 'Search', icon: faMagnifyingGlass },
		{ title: 'Help Desk', icon: faHeadphones, url: '/help-desk' },
		{
			title: 'Connectors',
			icon: faUserTie
		}
	];

	function closeSidebar() {
		sidebarStore.set(false);
	}
</script>

<section class="sidebar-root relative z-10 flex">
	<div
		class="sidebar z-50 h-screen w-3/4 border-r transition-all md:w-1/2 {$sidebarStore
			? 'absolute bottom-0 top-0 translate-x-0 bg-white md:relative'
			: 'hidden -translate-x-full lg:translate-x-0'} flex-col justify-start lg:flex lg:w-16"
	>
		<div
			class="sidebar-title my-5 flex w-full items-center justify-start gap-2 px-4 lg:my-0 lg:px-2"
		>
			<div class="my-4 flex items-center gap-2 rounded-full border-2 border-black bg-black p-3">
				<Logo width="24" height="24" className="w-5 h-5 md:w-4 md:h-4 text-white bg-black" />
			</div>
		</div>
		<div class="sidebar-menu pl-4">
			<ol
				class="my-12 flex flex-col gap-12 px-3 text-xl font-semibold text-gray-600 lg:mt-36 lg:px-1"
			>
				{#each links as link}
					<li class="hover:cursor-pointer hover:text-black">
						<a class="flex gap-2" href={link.url || '#'}>
							<Fa icon={link.icon} class="hover:text-black" />
							<div class="lg:hidden">
								{link.title}
							</div>
						</a>
					</li>
				{/each}
			</ol>
		</div>
	</div>
	<button
		class="sidebar-blanket absolute bottom-0 left-auto right-0 top-0 z-50 h-screen w-1/4 -translate-x-[400%] bg-black/50 md:w-4/6 md:-translate-x-[200%] lg:hidden {$sidebarStore
			? 'translate-x-0 md:translate-x-0'
			: 'hidden'}"
		on:click={closeSidebar}
	></button>
	<div class="sidebar-content w-full">
		<slot />
	</div>
</section>
