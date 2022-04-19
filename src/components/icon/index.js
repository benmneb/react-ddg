import React from 'react'
import PropTypes from 'prop-types'
import { Icons } from '../../assets'

export default function Icon({ name, color = 'inherit', size = 32 }) {
	return (
		<svg className={`icon-${name}`} fill={color} width={size} height={size}>
			<use href={`${Icons}#icon-${name}`} />
		</svg>
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
}
