import React from 'react'
import styled from 'styled-components'
import { getValue } from '../../helpers'

const StyledButton = styled.button`
	display: ${getValue('display')};
	padding: ${getValue('padding')};
	line-height: ${getValue('lineHeight')};
	vertical-align: middle;
	white-space: nowrap;
	text-align: center;
	position: relative;
	text-decoration: none;
	margin-top: 0;
	margin-bottom: 0;
	border: 1px solid #babec9;
	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
	background-color: ${getValue('backgroundColor')};
	color: ${getValue('color')};
	border-color: ${getValue('borderColor')};
	font-weight: ${getValue('fontWeight')};
	cursor: pointer;
	border-radius: 4px;
	box-sizing: content-box;
	user-select: none;

	&:hover {
		background-color: ${getValue('backgroundColor', 'hover')};
		border-color: ${getValue('borderColor', 'hover')};
		color: ${getValue('color', 'hover')};
	}
	&:active {
		background-color: ${getValue('backgroundColor', 'active')};
		border-color: ${getValue('borderColor', 'active')};
	}
`

export default function Button({ children, variant, ...props }) {
	return (
		<StyledButton variant={variant} {...props}>
			{children}
		</StyledButton>
	)
}
