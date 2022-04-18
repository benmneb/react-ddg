import React from 'react'
import styled from 'styled-components'
import { defaultPalette } from './default-palette'
import { Text } from '../../../../src'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 8px;
`

const Card = styled.div`
	display: flex;
	align-items: center;
`

const Disc = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 8px;
	background-color: ${({ bgColor }) => bgColor};
`

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-left: 8px;
`

export default function ColorPallete() {
	return (
		<Grid>
			{defaultPalette.map((color) => {
				const [name, hex] = Object.entries(color)[0]

				return (
					<Card key={hex}>
						<Disc bgColor={hex} />
						<TextWrapper>
							<Text>{name}</Text>
							<Text size="s" color="secondary">
								{hex}
							</Text>
						</TextWrapper>
					</Card>
				)
			})}
		</Grid>
	)
}
