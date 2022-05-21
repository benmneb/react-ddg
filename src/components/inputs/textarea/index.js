import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  padding: .8em;
  border-radius: 4px;

  font-family: inherit;
  box-sizing: border-box;
  margin: 0;
  font-size: 1em;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  color: #222;
  outline: none;

  resize: ${({ resize }) => resize}
}
`

export default function TextArea({ resize, ...props }) {
	return <StyledTextArea resize={resize} {...props} />
}
