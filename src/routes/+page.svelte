<script>
	import 'bubbles-ui/css/app.css';
	import { Header, Row, Column100, Card, Form, CardHeader } from 'bubbles-ui';
	$: name = 'Hasaan';

	$: inputs = [
		{
			type: 'text',
			id: 'name',
			label: 'name',
			validation: 'string|required',
			value: name,
			error: 'Name is required'
		},
		{
			label: 'Location Address',
			id: 'address',
			type: 'textarea',
			validation: 'string|required'
		},
		{
			type: 'switch',
			id: 'preferences.email',
			label: 'Email Updates',
			value: true,
			desc: 'Let us know if you want to receive email updates',
			disabled: false,
			error: 'An error occurred',
			validation: 'accepted' //best UX is to not make switches mandatory, use a checkbox instead if you need
		},

		{
			type: 'submit',
			label: 'Add',
			onsubmit: async (event) => {
				const data = await getFormData(inputs);
				console.log(data);
			}
		}
	];
</script>

<Header
	title="New Location"
	breadcrumbs={[
		{ label: 'Locations', href: '/' },
		{ label: 'New', href: '/locations/new' }
	]}
/>

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
					// href: '/dashboard/organization',
					hidden: false
				}
			]
		}
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
