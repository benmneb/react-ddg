export function getValue(property, psuedoSelector) {
	if (psuedoSelector) {
		return ({ variant, theme }) =>
			theme[variant]?.[psuedoSelector]?.[property] ||
			theme.default[psuedoSelector][property]
	}

	return ({ variant, theme }) =>
		theme[variant]?.[property] || theme.default[property]
}
