<script>
	import { Header, Row, Column100, Card, Table, TableRow, TableCell } from 'bubbles-ui';
	import { locations } from './store';
</script>

<Header
	title="Locations"
	buttons={[
		{
			icon: 'add',
			color: 'gray-lighter',
			href: '/locations/new'
		}
	]}
/>

<Row>
	<Column100>
		<Card>
			<Table>
				{#each $locations as loc}
					<TableRow>
						<TableCell text={loc.name} caption={loc.id} />
						<TableCell button={{ href: `locations/${loc?.id}` }} width="min" />
					</TableRow>
				{:else}
					<TableRow>
						<TableCell>
							<p>
								You do not have any locations. You can <a href="/locations/new">create one here</a>.
							</p>
						</TableCell>
					</TableRow>
				{/each}
			</Table>
		</Card>
	</Column100>
</Row>
