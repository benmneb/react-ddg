import React from 'react'
import '../../styles/styles.scss'

export default function Button({ children, variant, ...props }) {
	return (
		<button className={'btn ' + variant} {...props}>
			{children}
		</button>
	)
}
