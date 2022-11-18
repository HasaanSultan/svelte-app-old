<script>
	import { goto } from '$app/navigation';
	import {
		Header,
		Row,
		Column100,
		Card,
		Form,
		CardHeader,
		showLoading,
		hideLoading,
		showToast,
		getFormData,
		validateInputs
	} from 'bubbles-ui';

	import { locations } from '../store';

	$: inputs = [
		{
			type: 'text',
			id: 'name',
			label: 'name',
			validation: 'string|required'
		},
		{
			label: 'location Address',
			id: 'address',
			type: 'textarea'
		},

		{
			type: 'submit',
			label: 'Create Location',
			onsubmit: async (event) => {
				const loading = event.currentTarget.id;
				showLoading(loading);
				try {
					await validateInputs(inputs);
					const data = await getFormData(inputs);
					console.log(data);
					locations.update((currentItem) => [
						...currentItem,
						{ name: data?.name, address: data?.address, id: Math.random() }
					]);
					goto('/locations');
				} catch (error) {
					showToast(error.message);
				} finally {
					setTimeout(() => {
						hideLoading(loading);
					}, 2000);
				}
			}
		}
	];
</script>

<Header
	title="New Location"
	breadcrumbs={[
		{ label: 'Locations', href: '/locations' },
		{ label: 'New', href: '/locations/new' }
	]}
/>

<Row>
	<Column100>
		<Card>
			<CardHeader title="Add Location" />

			<Form {inputs} />
		</Card>
	</Column100>
</Row>
