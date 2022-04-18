import React from 'react'

import { ColorPalette } from './components'
import { Alert, Button, ButtonGroup, Text } from '../../src'

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

			<h2>Text</h2>
			<h3>Headings</h3>
			<Text component="h1">XXL Heading (h1)</Text>
			<Text component="h2">XL Heading (h2)</Text>
			<Text component="h3">L Heading (h3)</Text>
			<Text component="h4">M Heading (h4)</Text>
			<Text component="h5">S Heading (h5)</Text>
			<Text component="h6">XS Heading (h6)</Text>
			<h3>Text</h3>
			<Text size="xxxxl">XXXXL Text</Text>
			<Text size="xxxl">XXXL Text</Text>
			<Text size="xxl">XXL Text</Text>
			<Text size="xl">XL Text</Text>
			<Text size="l">L Text</Text>
			<Text>M Text</Text>
			<Text size="s">S Text</Text>
			<Text size="xs">XS Text</Text>
			<Text size="xxs">XXS Text</Text>
			<Text size="xxxs">XXXS Text</Text>
			<h3>Colors</h3>
			<Text>Primary</Text>
			<Text color="primaryAlt">PrimaryAlt</Text>
			<Text color="secondary">Secondary</Text>
			<Text color="secondaryAlt">SecondaryAlt</Text>
			<br />
			<Text color="gold">Gold!</Text>
			<Text color="purple">Purple!</Text>
			<Text color="green">Green!</Text>
			<Text color="redDark">Red Dark!</Text>
			<br />
			<Text color="papayawhip">Custom color from string</Text>
			<Text color="#550011">Custom color from HEX</Text>
			<Text color="rgba(30, 130, 230, 1)">Custom color from RGBA</Text>

			<h2>Color Palette</h2>
			<p>Each of these colors can be used in any Text component...</p>
			<ColorPalette />
		</div>
	)
}
