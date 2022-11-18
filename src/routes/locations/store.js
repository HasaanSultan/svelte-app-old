import { writable } from 'svelte/store';

export const locations = writable([
	{
		object: 'location',
		address: {
			object: 'address',
			line1: null,
			line2: null,
			city: 'Islamabad',
			country: 'Pakistan',
			country_code: 'PK',
			formatted_address: ', Pakistan',
			postal_code: null,
			state: 'Islamabad Capital Territory',
			state_code: 'Islamabad Capital Territory',
			textarea: 'Pakistan',
			timezone: 'Asia/Karachi',
			verified: false,
			coordinates: [33.6466755, 73.1125597],
			id: null,
			hash: null
		},
		id: 'loc_mJ3GsaUCjHUvoHmp',
		name: 'My HQ',
		organization_id: 'org_3LroA7rTnJBnX62FKN1bEB',
		pickup_types: ['in_store_pickup', 'curbside_pickup'],
		service_areas: {
			postal_codes: []
		},
		terminal_location_id: null,
		updated_at: 1668630124,
		users: ['IhjCkG3UG3ObtGlpyb9YwM7D0Fv1']
	},
	{
		address: {
			object: 'address',
			line1: '500 7th Avenue',
			line2: null,
			city: 'New York',
			country: 'United States',
			country_code: 'US',
			formatted_address: '500 7th Ave, New York, NY 10018, USA',
			postal_code: '10018',
			state: 'New York',
			state_code: 'NY',
			textarea: '500 7th Avenue \rNew York, NY 10018\rUnited States',
			timezone: 'America/New_York',
			verified: false,
			coordinates: [40.7531386, -73.9894616],
			id: 'addr_7407fb9ae37998dab83c505b3588a9c6ec3120822b07ac33d6c6b740f01b1000',
			hash: '7407fb9ae37998dab83c505b3588a9c6ec3120822b07ac33d6c6b740f01b1000'
		},
		provider_instructions: null,
		created_at: 1658295954,
		holidays: {},
		id: 'loc_mJ3GsaUCjHUvoHmp1SEVk8',
		kiosk_message: null,
		mailrooms: [],
		metadata: {},
		name: 'Test Location',
		organization_id: 'org_3LroA7rTnJBnX62FKN1bEB',
		pickup_types: ['in_store', 'curbside'],
		service_areas: {
			postal_codes: []
		},
		terminal_location_id: 'tml_EtRaDgf6DGMcaK',
		updated_at: 1668630124,
		users: ['IhjCkG3UG3ObtGlpyb9YwM7D0Fv1', 'IhjCkG3UG3ObtGlpyb9YwM7D0Fv1']
	}
]);
