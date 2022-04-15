import * as palette from './palette'

export const theme = {
	default: {
		// common among all
		display: 'inline-block',
		padding: '0 1em',
		lineHeight: '2.5',
		//
		color: palette.slate,
		backgroundColor: '#fafafa',
		borderColor: '#ddd',
		fontWeight: 'normal',
		hover: {
			backgroundColor: palette.white,
		},
		active: {
			backgroundColor: '#fafafa',
			borderColor: '#fafafa',
		},
	},
	alternate: {
		color: palette.slateLight,
		backgroundColor: palette.platinumLight,
		borderColor: palette.platinumDarker,
		fontWeight: 'normal',
		hover: {
			color: palette.slateLight,
			backgroundColor: '#d8d8d8',
		},
		active: {
			backgroundColor: palette.platinumLight,
			borderColor: palette.platinumLight,
		},
	},
	wire: {
		backgroundColor: 'transparent',
		fontWeight: 'normal',
		borderColor: '#ddd',
		color: palette.greyLight,
		hover: {
			borderColor: palette.greyLight,
			backgroundColor: palette.greyLight,
			color: palette.white,
		},
		active: {
			borderColor: palette.greyLight,
			backgroundColor: palette.greyLight,
			color: palette.white,
		},
	},
	primary: {
		color: palette.white,
		backgroundColor: palette.blueLight,
		borderColor: palette.blueLight,
		fontWeight: 600,
		hover: {
			backgroundColor: palette.blue,
			borderColor: palette.blue,
		},
		active: {
			backgroundColor: palette.blueDark,
			borderColor: palette.blueDark,
		},
	},
	primaryAlt: {
		color: palette.white,
		backgroundColor: palette.blue,
		borderColor: palette.blue,
		fontWeight: 600,
		hover: {
			backgroundColor: palette.blueDark,
			borderColor: palette.blueDark,
		},
		active: {
			backgroundColor: palette.blueDark,
			borderColor: palette.blueDark,
		},
	},
	secondary: {
		color: palette.slateLight,
		backgroundColor: palette.silver,
		borderColor: '#ddd',
		fontWeight: 600,
		hover: {
			backgroundColor: palette.platinumLight,
		},
		active: {
			backgroundColor: palette.platinumDark,
			borderColor: palette.platinumDark,
		},
	},
	critical: {
		color: palette.white,
		backgroundColor: palette.redLight,
		borderColor: palette.redLight,
		fontWeight: 600,
		hover: {
			backgroundColor: palette.red,
			borderColor: palette.red,
		},
		active: {
			backgroundColor: palette.redDark,
			borderColor: palette.redDark,
		},
	},
	inline: {
		display: 'inline',
		lineHeight: 'inherit',
		padding: '0 0.75em',
	},
}
