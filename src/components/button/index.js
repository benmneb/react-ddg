import React from 'react'
import styled from 'styled-components'
import { getValue } from '../../helpers'

const StyledButton = styled.button`
	display: ${getValue('button', 'display')};
	padding: ${getValue('button', 'padding')};
	line-height: ${getValue('button', 'lineHeight')};
	vertical-align: middle;
	white-space: nowrap;
	text-align: center;
	position: relative;
	text-decoration: none;
	margin-top: 0;
	margin-bottom: 0;
	border: 1px solid #babec9;
	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
	background-color: ${getValue('button', 'backgroundColor')};
	color: ${getValue('button', 'color')};
	border-color: ${getValue('button', 'borderColor')};
	font-weight: ${getValue('button', 'fontWeight')};
	cursor: pointer;
	border-radius: 4px;
	box-sizing: content-box;
	user-select: none;

	&:hover {
		background-color: ${getValue('button', 'backgroundColor', 'hover')};
		border-color: ${getValue('button', 'borderColor', 'hover')};
		color: ${getValue('button', 'color', 'hover')};
	}
	&:active {
		background-color: ${getValue('button', 'backgroundColor', 'active')};
		border-color: ${getValue('button', 'borderColor', 'active')};
	}
`

export default function Button({ children, variant, ...props }) {
	return (
		<StyledButton variant={variant} {...props}>
			{children}
		</StyledButton>
	)
}
