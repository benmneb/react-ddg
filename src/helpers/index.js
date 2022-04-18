export function getValue(component, property, psuedoSelector) {
	if (psuedoSelector) {
		return ({ variant, theme }) =>
			theme[component]?.[variant]?.[psuedoSelector]?.[property] ||
			theme[component].default[psuedoSelector][property]
	}

	return ({ variant, theme }) =>
		theme[component]?.[variant]?.[property] ||
		theme[component].default[property]
}

export function getColor(color) {
	return ({ theme }) => theme.text.color[color] || color
}

export function getFontSize(size) {
	return ({ theme }) => theme.text.fontSize[size] || theme.text.fontSize.m
}

export function mapComponentToTextSize(variant) {
	switch (variant) {
		case 'h1':
			return 'xxxxl'
		case 'h2':
			return 'xxxl'
		case 'h3':
			return 'xxl'
		case 'h4':
			return 'xl'
		case 'h5':
			return 'l'
		case 'h6':
			return 'm'
		default:
			return variant
	}
}
