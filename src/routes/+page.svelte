<script lang="ts">
	import type {IConnectors} from "$lib/components/connector-cards/types"
	import ConnectorCardsGrid from "$lib/components/connector-cards/connector-cards-grid.svelte"
	import { faAmazon, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

	const connectors: IConnectors[] =  [
		{
			image: "/images/github.svg",
			title: "Github"
		},
		{
			title: "Facebook",
			icon: faFacebook,
			iconColor: "#0000ff"
		},
		{
			title: "Whatsapp",
			icon: faWhatsapp,
			iconColor: "#00ff00"
		},
		{
			title: "Linkedin",
			icon: faLinkedin,
			iconColor: "#0A66C2"
		},
		{
			title: "Amazon",
			icon: faAmazon,
			iconColor: "#FF9900"
		},
		{
			title: "Microsoft",
			image: "/images/microsoft.png"
		},
		{
			title: "Analytics",
			image: "/images/analytics.svg"
		},
	]

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-4 py-6">
	<div>
		<h1 class="text-3xl lg:text-4xl font-semibold">Connectors</h1>
	</div>
	<div class="mt-12">
		<ConnectorCardsGrid connectors={connectors}	/>
	</div>
</section>