<script lang="ts">
	import type {IConnectors} from "$lib/components/connector-cards/types"
	import { faAmazon, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import Connector from '$lib/components/connector-cards/connector-cards.svelte';

	const connectors: IConnectors[] =  [
		{
			image: "/images/github.svg",
			title: "Github",
			url: "./#",
		},
		{
			title: "Facebook",
			icon: faFacebook,
			iconColor: "#0000ff",
			url: "./#",
		},
		{
			title: "Whatsapp",
			icon: faWhatsapp,
			iconColor: "#00ff00",
			url: "./#",
		},
		{
			title: "Linkedin",
			icon: faLinkedin,
			iconColor: "#0A66C2",
			url: "./#",
		},
		{
			title: "Amazon",
			icon: faAmazon,
			iconColor: "#FF9900",
			url: "./#",
		},
		{
			title: "Microsoft",
			image: "/images/microsoft.png",
			url: "./#",
		},
		{
			title: "Analytics",
			image: "/images/analytics.svg",
			url: "./#",
		},
		{ url: "./#", title: 'Google Maps Geocode', image: "/images/google-maps-geocode.svg", },
		{ url: "./#", title: 'Google Contacts', image: "/images/google_contacts.svg", },
		{ url: "./#", title: 'Google Drive', image: "/images/google_drive.svg", },
		{ url: "./#", title: 'Gmail', image: "/images/gmail.png", },
		{ url: "./#", title: 'Google Sheets', image: "/images/google-sheets.svg", },
		{ url: "./#", title: 'Google Tasks', image: "/images/google-tasks.svg", },
		{ url: "./#", title: 'Google Analytics 4', image: "/images/google_analytics_4.svg", },
		{ url: "./#", title: 'Youtube', image: "/images/youtube.svg", },
		{ url: "./#", title: 'Youtube Analytics', image: "/images/youtube.svg", },
		{ url: "./#", title: 'S3 - API Keys', image: "/images/s3.png", },
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
		<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
			{#each connectors as connector}
				<a href={connector.url || "./#"}>
					<Connector {connector} />
				</a>
			{/each}
		</div>
	</div>
</section>