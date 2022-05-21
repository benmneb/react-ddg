import React from 'react'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'

const Input = styled.input`
  border-radius: 4px;
  height: 2em;
  width: 100%;
  line-height: 2em;
  padding-left: .8em;
  padding-top: 0;
  padding-bottom: 0;
  -webkit-appearance: none;
  box-sizing: border-box;
  margin: 0;
  font-size: 1em;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  color: #222;
  outline: none;
}
`

const Wrapper = styled.div`
	position: relative;
`

const ClearableInput = styled(Input)`
	padding-right: 2em;
`

const ClearIcon = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 0.8em;
	line-height: 2.6em;
	padding: 0 1em;
	color: #888;
	cursor: pointer;
	user-select: none;

	&:hover {
		color: #222;
	}
`

function ClearableTextField(props) {
	const [value, setValue] = useState('')

	return (
		<Wrapper>
			<ClearableInput
				type="text"
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<ClearIcon onClick={() => setValue('')}>X</ClearIcon>
		</Wrapper>
	)
}

export default function TextField({ clearable, ...props }) {
	if (clearable) return <ClearableTextField {...props} />

	return <Input type="text" {...props} />
}
