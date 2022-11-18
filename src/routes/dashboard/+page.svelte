<script>
	//   import { dndzone } from "svelte-dnd-action";
	import {
		Header,
		Grid,
		GridItem,
		Row,
		Tag,
		Card,
		Table,
		TableRow,
		TableCell,
		Column100,
		showLoading,
		hideLoading,
		Spinner
	} from 'bubbles-ui';

	import { navigating } from '$app/stores';

	import icon_ship from '$lib/images/apps/ship-icon.svg';
	import icon_receive from '$lib/images/apps/receive-icon.svg';
	import icon_locations from '$lib/images/apps/locations-icon.svg';
	import icon_directory from '$lib/images/apps/directory-icon.svg';
	import icon_deliver from '$lib/images/apps/deliver-icon.svg';
	import icon_inventory from '$lib/images/apps/inventory-icon.svg';
	import icon_logs from '$lib/images/apps/logs-icon.svg';
	import icon_workflows from '$lib/images/apps/workflows-icon.svg';
	import icon_track from '$lib/images/apps/track-icon.svg';
	import icon_settings from '$lib/images/apps/settings-icon.svg';

	let loading = null;

	let user = {};

	$: if (!$navigating) {
		loading = null;
	}

	$: if (loading) {
		//currently having an issue with the $navigating store
		setTimeout(() => {
			loading = null;
		}, 7500);
	}

	$: apps = [
		{
			name: 'Ship',
			href: import.meta.env.VITE_APPS_SHIPPING || 'asds',
			icon: icon_ship,
			id: 'ship',
			tag: {
				label: !user?.onboarded_apps?.includes('ship') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('ship') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Receive',
			href: ``,
			icon: icon_receive,
			id: 'receive',
			tag: null,
			active: true
		},
		{
			name: 'Track',
			href: import.meta.env.VITE_APPS_TRACK || '/dashboard/sales',
			icon: icon_track,
			id: 'track',
			tag: {
				label: !user?.onboarded_apps?.includes('track') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('track') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Inventory',
			href: import.meta.env.VITE_APPS_INVENTORY || '/dashboard/sales',
			icon: icon_inventory,
			id: 'inventory',
			tag: {
				label: !user?.onboarded_apps?.includes('inventory') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('inventory') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Deliver',
			href: '/dashboard/sales',
			icon: icon_deliver,
			id: 'deliver',
			tag: {
				label: !user?.onboarded_apps?.includes('deliver') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('deliver') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Locations',
			href: '/locations',
			icon: icon_locations,
			id: 'locations',
			tag: {
				label: !user?.onboarded_apps?.includes('locations') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('locations') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Contacts',
			href: import.meta.env.VITE_APPS_CONTACTS || '/dashboard/sales',
			icon: icon_directory,
			id: 'contacts',
			tag: {
				label: !user?.onboarded_apps?.includes('contacts') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('contacts') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Workflows',
			href: import.meta.env.VITE_APPS_WORKFLOWS || '/dashboard/sales',
			icon: icon_workflows,
			id: 'workflows',
			tag: {
				label: !user?.onboarded_apps?.includes('workflows') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('workflows') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Logs',
			href: import.meta.env.VITE_APPS_LOGS || '/dashboard/sales',
			icon: icon_logs,
			id: 'logs',
			tag: {
				label: !user?.onboarded_apps?.includes('logs') ? 'New' : null,
				color: !user?.onboarded_apps?.includes('logs') ? 'primary-lightest' : null
			},
			active: true
		},
		{
			name: 'Settings',
			href: '/settings',
			icon: icon_settings,
			id: 'settings',
			tag: null,
			active: true
		}
	];
</script>

<Header
	title="PackageX Cloud"
	breadcrumbs={false}
	buttons={[
		{
			icon: 'more',
			color: 'gray-lighter',
			search: false,
			options: [
				{
					label: 'Organization',
					caption: 'Update company settings',
					href: '/dashboard/organization'
				},
				{
					label: 'Users',
					caption: 'Manage who has access',
					href: '/dashboard/users'
				},
				{
					label: 'Plan & Payments',
					caption: 'View transactions and subscriptions',
					href: '/dashboard/payments'
				},
				{
					label: 'APIs & Webhooks',
					caption: 'Developer Center',
					href: '/dashboard/developers'
				},
				{
					break: true
				},
				{
					label: 'Knowledge Base',
					caption: 'Learn more about the platform',
					href:
						'https://packagexio.notion.site/PackageX-Platform-Knowledge-Base-b4e9634db235492a8d203b4de2b4b173',
					new_page: true
				},
				{
					break: true
				},
				{
					label: 'Logout',
					onclick: async (event) => {
						const button_id = event.currentTarget.parentElement.parentElement.parentElement.querySelector(
							'button'
						).id;

						showLoading(button_id);
						// await signOut(auth);
						hideLoading(button_id);
						window.location.href = '/auth/login';
					}
				}
			]
		}
	]}
/>

<Row>
	<Column100>
		<Card>
			<!-- <CardHeader
          title="Account Setup Checklist"
          caption="All of our first party apps and API's have a free tier for you to learn more about the products. At your convenience, please complete the following onboarding steps."
        /> -->
			<Table>
				<TableRow href="/locations">
					<TableCell
						text="Add Your First Location"
						large={true}
						caption="Locations are used to keep track of users, inventory levels, and more."
					/>
					<TableCell
						tag={{ label: 'Pending', color: 'warning-lightest' }}
						align="right"
						width="min"
					/>
					<TableCell button width="min" />
				</TableRow>

				<TableRow href="/dashboard/payments/payment-methods">
					<TableCell
						text="Add Payment Information"
						large={true}
						caption="While our apps have free tiers, we will need payment information on file."
					/>
					<TableCell
						tag={{ label: 'Pending', color: 'warning-lightest' }}
						align="right"
						width="min"
					/>
					<TableCell button width="min" />
				</TableRow>
			</Table>
		</Card>
	</Column100>
</Row>

<section>
	<Row>
		<Grid max_columns={5} min_columns={2} row_gap={4} column_gap={4}>
			{#each apps as app (app.id)}
				{#if !app.hidden}
					<GridItem>
						<div class="flex">
							<div class="card__wrapper">
								<!-- <Card px={0} py={0} background={null}> -->
								<div class="app__container">
									<div class="img">
										<a
											href={app.href}
											on:click={() => {
												if (app.active) {
													loading = app.id;
												}
											}}
										>
											{#if loading === app.id}
												<div class="spinner__container">
													<Spinner size={3} />
												</div>
											{/if}
											<img
												src={app.icon}
												alt={app.name}
												loading="lazy"
												class:inactive={!app.active}
												class:loading={loading === app.id}
												class="loading"
											/>
										</a>
									</div>
								</div>
								<!-- </Card> -->
							</div>
							<div class="desc">
								<h6>
									{app.name}
								</h6>

								{#if !app.active}
									<Tag label="Contact Sales" color="warning-lightest" />
								{:else if app.tag}
									<Tag {...app.tag} />
								{:else}
									<span class="empty-tag-placeholder" />
								{/if}
							</div>
						</div>
					</GridItem>
				{/if}
			{/each}
		</Grid>
	</Row>
</section>

<style>
	.card__wrapper {
		transition: all 0.4s ease-in-out;
		filter: drop-shadow(0 0 1rem rgb(0 0 0 0.5rem));
	}

	.card__wrapper:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.app__container {
		position: relative;
		border-radius: 23%;
		background: var(--white);
		width: -webkit-fill-available;
		box-shadow: rgb(227 230 236 / 65%) 0px 0px 6.875rem;
	}

	:global(html.dark) .app__container {
		background: var(--theme-dark);
		box-shadow: rgb(0 0 0 / 25%) 0px 0px 2rem;
	}

	span.empty-tag-placeholder {
		height: 1.5rem;
	}

	section {
		margin-top: 4rem;
	}
	h6 {
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.flex {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: space-between;
		text-align: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 23%;
	}

	.img {
		width: 100%;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spinner__container {
		width: 50%;
		height: 50%;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.img img.loading {
		visibility: hidden;
	}

	.desc {
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;
	}

	.inactive {
		filter: grayscale(100%);
	}
</style>
