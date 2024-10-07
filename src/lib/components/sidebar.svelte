<script lang="ts">
	import { sidebarStore } from '$lib/services/sidebar';
	import Logo from '$lib/components/logo.svelte';
	import Fa from 'svelte-fa';
	import {
		faBoxesPacking, faCircleInfo,
		faEnvelope,
		faHome,
		faMagnifyingGlass
	} from '@fortawesome/free-solid-svg-icons';

	const links = [{ title: 'Home', icon: faHome }, { title: 'Search', icon: faMagnifyingGlass }, {
		title: 'Connectors',
		icon: faBoxesPacking
	}, { title: 'Contact-Us', icon: faEnvelope }, { title: 'About-Us', icon: faCircleInfo }];


	function closeSidebar() {
		sidebarStore.set(false);
	}

</script>


<section class="sidebar-root flex relative z-10">
	<!--	<div>-->
	<!--		class="sidebar  border-r {$sidebarStore ? 'absolute top-0 bottom-0 bg-white w-3/4 md:w-1/2' : 'hidden lg:flex'} lg:w-16 flex flex-col justify-start">-->
	<div
		class="sidebar h-screen z-50 border-r w-3/4 md:w-1/2 transition-all {$sidebarStore ? 'absolute top-0 bottom-0 bg-white translate-x-0 md:relative' : 'hidden -translate-x-full lg:translate-x-0'} lg:w-16 lg:flex flex-col justify-start">
		<div class="sidebar-title w-full px-4 lg:px-2 my-5 lg:my-0 flex gap-2 justify-start items-center">
			<div class="flex items-center gap-2 rounded-full border-2 border-black p-3 my-4 bg-black">
				<Logo width="24" height="24" className="w-5 h-5 md:w-4 md:h-4 text-white bg-black" />
			</div>
		</div>
		<div class="sidebar-menu pl-4">
			<ol class="flex flex-col gap-12 my-12 lg:mt-36 text-xl font-semibold text-gray-600 px-3 lg:px-1">
				{#each links as link}
					<li class="flex gap-2 hover:cursor-pointer hover:text-black">
						<Fa icon={link.icon} class="hover:text-black" />
						<div class="lg:hidden">
							{link.title}
						</div>
					</li>
				{/each}

			</ol>
		</div>

	</div>
	<button
		class="z-50 sidebar-blanket -translate-x-[400%] md:-translate-x-[200%] w-1/4 md:w-1/2 lg:hidden absolute top-0 left-auto right-0 bottom-0 bg-black/50 h-screen {$sidebarStore ? 'translate-x-0 md:translate-x-0' : 'hidden'}"
		on:click={closeSidebar}></button>
	<div class="sidebar-content w-full">
		<slot />
	</div>
</section>

