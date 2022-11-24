<script>
	import {
		Column50,
		Header,
		hideModal,
		showLoading,
		showModal,
		Row,
		Card,
		hideLoading,
		submitForm,
		Form
	} from 'bubbles-ui';
	import { locations } from '../store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: location = $locations.filter((x) => x.id === $page.params.location)?.[0];

	$: inputs = [
		{
			type: 'text',
			id: 'name',
			label: 'name',
			value: location.name
		},
		{
			type: 'textarea',
			id: 'address',
			label: 'Location Address',
			value: location.address?.textarea
		},
		{
			type: 'submit',
			label: 'Update Location',
			onsubmit: async (event) => {
				const loading = event.currentTarget.id;
				showLoading(loading);
				setTimeout(() => {
					locations.update((currentItem) => {
						debugger;
						console.log(location, 'lo', inputs);
						const index = currentItem.findIndex((x) => x.id === location.id);
						if (index !== -1) currentItem[index] = location;
						return currentItem;
					});
					hideloading(loading);
				}, 2000);
			}
		}
	];
</script>

<Header
	title={location?.name}
	buttons={[
		{
			icon: 'trash',
			color: 'gray-lighter',
			onclick: () => {
				const form = [
					{
						type: 'text',
						id: 'confirmation',
						label: 'confirmation',
						validation: `required|string|match:${location.name}`,
						desc: `Type the name:<strong>${location.name}</strong>`,
						error: `Type "${location.name}" to confirm`
					},
					{
						type: 'submit',
						label: 'Delete Location',
						color: 'error',
						onsubmit: async (event) => {
							try {
								let loading = event.currentTarget.id;
								showLoading(loading);
								setTimeout(async () => {
									debugger;

									locations.update((currentItem) => {
										return currentItem.filter((x) => x.id !== location.id);
									});
									showLoading(false);
									await goto('/locations', { replaceState: true });
									hideModal();
								}, 3000);
							} catch (error) {}
						}
					}
				];

				showModal('Delete Location', {
					message:
						'To delete this location, type the name of the location into the input. Once the location is deleted, there is no way of getting it back. Everything that is currently linked to this location like contacts and shipments will lose the association but will not be deleted',
					form: form
				});
			}
		}
	]}
/>

<Row>
	<Column50>
		<Card>
			<Form {inputs} />
		</Card>
	</Column50>
</Row>
