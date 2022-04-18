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
