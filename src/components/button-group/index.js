import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Group = styled.div`
	> button {
		&:first-child {
			border-radius: 0.25em 0 0 0.25em;
		}
		&:last-child {
			border-radius: 0 0.25em 0.25em 0;
			margin-left: -1px;
		}
		&:not(:first-child):not(:last-child) {
			margin-left: -1px;
			border-radius: 0;
		}
	}
`

export default function ButtonGroup({ children, ...props }) {
	return <Group {...props}>{children}</Group>
}

ButtonGroup.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
