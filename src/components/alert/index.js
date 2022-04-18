import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getValue } from '../../helpers'

const Message = styled.div`
	box-sizing: border-box;
	border-radius: 4px;
	display: block;
	position: relative;
	margin: 0.5em auto 1.25em;
	padding: 1em;
	color: ${getValue('color')};
	background-color: ${getValue('backgroundColor')};
`

export default function Alert({ children, variant, ...props }) {
	return (
		<Message variant={variant} {...props}>
			{children}
		</Message>
	)
}

Alert.propTypes = {
	children: PropTypes.string.isRequired,
	variant: PropTypes.string.isRequired,
}
