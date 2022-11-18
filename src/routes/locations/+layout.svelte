<script>
	import { Sidebar, SidebarPageWrapper } from 'bubbles-ui'; //components

	import logo from '$lib/images/apps/locations-logo.svg';
	import logo_dark from '$lib/images/apps/locations-logo-dark-mode.svg';

	import icon_locations from '$lib/images/locations.svg';
	import icon_settings from '$lib/images/settings.svg';

	const sidebarConfig = {
		logo: logo,
		logo_dark: logo_dark,
		href: '/',
		sections: [
			{
				label: 'Locations',
				href: '/locations',
				notifications: 0,
				icon: icon_locations
			},
			{
				label: 'Settings',
				href: '/locations/settings',
				notifications: 0,
				icon: icon_settings
			}
		]
	};
</script>

<Sidebar {...sidebarConfig} />
<SidebarPageWrapper>
	<slot />
</SidebarPageWrapper>
