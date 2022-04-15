import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider, theme } from '../../src'

import Demo from './demo'

import './index.css' // Set the font

export default function DemoApp() {
	return (
		<ThemeProvider theme={theme}>
			<Demo />
		</ThemeProvider>
	)
}

render(<DemoApp />, document.querySelector('#demo'))
