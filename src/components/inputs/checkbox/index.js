import React from 'react'
import styled from 'styled-components'
import { getColor, getFontSize } from '../../../helpers'

const StyledInput = styled.input`
	font-size: ${({ size }) => getFontSize(size)};

	width: 14em;
	-webkit-appearance: none;
	-moz-appearance: none;
	height: 14em;
	border: 0.1em solid black;
	border-radius: 8px;

	&:checked {
		background-color: ${({ color = 'blue' }) => getColor(color)};
	}

	&:checked:after {
		margin-left: 4.3em;
		margin-top: -0.4em;
		width: 3em;
		height: 10em;
		border: solid white;
		border-width: 0 2em 2em 0;
		border-radius: 8px;
		transform: rotate(45deg);
		content: '';
		display: block;
	}
`

function CheckboxWithLabel({ label, labelFor = '', ...props }) {
	return (
		<div>
			<StyledInput type="checkbox" {...props} />
			<label for={labelFor}>{label}</label>
		</div>
	)
}

export default function Checkbox({ label, size, ...props }) {
	if (label) return <CheckboxWithLabel label={label} {...props} />

	return <StyledInput type="checkbox" size={size} {...props} />
}
