import React from 'react'

import { Alert, Button, ButtonGroup } from '../../src'

export default function Demo() {
	return (
		<div>
			<h1>ReactDDGStyles</h1>

			<h2>Buttons</h2>
			<Button>Default</Button>
			<Button variant="alternate">Alternate</Button>
			<Button variant="wire">Wire</Button>
			<Button variant="inline">Inline</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="primaryAlt">Primary Alt</Button>
			<Button variant="critical">Critical</Button>
			<Button variant="secondary">Secondary</Button>

			<h2>Button Groups</h2>
			<ButtonGroup>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="primary">First</Button>
				<Button variant="primary">Second</Button>
				<Button variant="primary">Third</Button>
				<Button variant="primary">Fourth</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="secondary">Cancel</Button>
				<Button variant="critical">Delete</Button>
			</ButtonGroup>

			<h2>Icons</h2>
			<div>COMING SOON!!1</div>

			<h2>Alerts & Messages</h2>
			<Alert>This is the default alert</Alert>
			<Alert variant="info">This is an "info" alert</Alert>
			<Alert variant="help">This is a "help" alert</Alert>
			<Alert variant="warning">This is a "warning" alert</Alert>
		</div>
	)
}
