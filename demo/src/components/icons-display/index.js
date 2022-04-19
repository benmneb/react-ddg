import React from 'react'
import styled from 'styled-components'
import { allIcons } from '../../assets'
import { Icon, Text } from '../../../../src'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	grid-gap: 8px;
`

const Card = styled.div`
	place-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	border: 1px solid #e3e3e3;
	border-radius: 4px;
	padding: 12px;
	gap: 12px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06);
	width: 120px;
`

export default function Icons() {
	return (
		<Grid>
			{allIcons
				.sort((a, b) => a > b)
				.map((icon) => (
					<Card key={icon}>
						<Icon name={icon} size={32} />
						<Text component="code" color="secondary">
							{icon}
						</Text>
					</Card>
				))}
		</Grid>
	)
}
