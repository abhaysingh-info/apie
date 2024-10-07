<script>
	import Header from './Header.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import '../app.css';
</script>

<div class="app">
	<Sidebar>
		<Header></Header>
		<main>
			<slot />
		</main>
	</Sidebar>

</div>

