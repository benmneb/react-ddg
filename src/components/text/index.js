import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getFontSize, getColor, mapComponentToTextSize } from '../../helpers'

const StyledText = styled.p`
	font-weight: ${({ as }) =>
		['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as) ? 600 : 'normal'};
	font-size: ${({ size }) => getFontSize(size)};
	margin: 0;
	padding: 0;
	color: ${({ color }) => getColor(color)};
`

export default function Text({ component = 'p', size, color, children }) {
	return (
		<StyledText
			as={component}
			size={mapComponentToTextSize(size || component)}
			color={color}
		>
			{children}
		</StyledText>
	)
}

Text.propTypes = {
	component: PropTypes.elementType,
	size: PropTypes.oneOf([
		'xxxxl',
		'xxxl',
		'xxl',
		'xl',
		'l',
		'm',
		's',
		'xs',
		'xxs',
		'xxxs',
	]),
	color: PropTypes.string,
	children: PropTypes.string.isRequired,
}
