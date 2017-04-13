
import React, {
	StyleSheet
} from 'react-native'

import styleConfig from './config'

export default StyleSheet.create({
	general: {
		marginBottom: 0,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 5,
		padding: 12,
		backgroundColor: styleConfig.colors.red,
		alignSelf: 'stretch',
	},
	simpleTextButton: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
		marginTop: 10
	},
	simpleText: {
		textAlign: 'center',
		color: styleConfig.colors.red,
		fontFamily: styleConfig.fonts.text,
		fontSize: 9,
		fontWeight: 'normal',
		flex: 1,
	},
	generalHorizontal: {
		marginTop: 20,
		borderRadius: 5,
		padding: 10,
		marginLeft: 8,
		marginRight: 8,
		width: 150,
		backgroundColor: styleConfig.colors.red,
		justifyContent: 'center',
		alignItems: 'center'
	},
	generalTruckType: {
		marginTop: 20,
		borderRadius: 5,
		padding: 10,
		marginLeft: 8,
		marginRight: 8,
		width: 150,
		backgroundColor: styleConfig.colors.red,
		justifyContent: 'center',
		alignItems: 'center',
	},
	disabled: {
		marginBottom: 0,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 5,
		padding: 12,
		backgroundColor: styleConfig.colors.midGrey
	},

	disabledHorizontal: {
		marginTop: 20,
		borderRadius: 5,
		padding: 12,
		marginRight: 10,
		width: 150,
		backgroundColor: styleConfig.colors.midGrey
	},
	text: {
		textAlign: 'center',
		color: '#ffffff',
		fontFamily: styleConfig.fonts.main,
		fontSize: 28,
	},
	textLeft: {
		textAlign: 'left',
		color: '#ffffff',
		fontFamily: styleConfig.fonts.main,
		fontSize: 24,
		fontWeight: 'bold',
	},
	textLeftGeneral: {
		textAlign: 'left',
		color: '#ffffff',
		fontFamily: styleConfig.fonts.text,
		fontSize: 13,
		fontWeight: 'bold',
		flex: 1,
	},
	textCenterGeneral: {
		textAlign: 'center',
		color: '#ffffff',
		fontFamily: styleConfig.fonts.text,
		fontSize: 13,
		fontWeight: 'bold',
		flex: 1,
	},
	textSub: {
		textAlign: 'left',
		color: '#ffffff',
		fontFamily: 'helvetica',
		fontSize: 13,
	},
	description: {
		color: '#ffffff',
		marginTop: 10,
		lineHeight: 12,
		fontSize: 12
	},
	divider: {
		borderTopColor: styleConfig.colors.lightRed,
		borderWidth: 1,
		borderColor: styleConfig.colors.red,
		paddingTop: 10,
		marginTop: 10
	},
	dividerDisabled: {
		borderTopColor: styleConfig.colors.lightGrey,
		borderWidth: 1,
		borderColor: styleConfig.colors.midGrey,
		paddingTop: 10,
		marginTop: 10
	},
	yesNo: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 22,
		fontFamily: styleConfig.fonts.main,
		textAlign: 'left',
		paddingRight: 10
	},
	yesNoRight: {
		color: '#ffffff',
		textAlign: 'left',
		flex: 1,
		fontSize: 12
	},
	resultsArrow: {
		padding: 0
	},
	resultsRightArrow: {
		right: 0,
		padding: 0,
		margin: 0
	},
	resultsLeftArrow: {
		right: 0,
		padding: 0,
		margin: 0
	},
	resultBack: {
		marginBottom: 0,
		marginLeft: 20,
		marginRight: 20,
		padding: 12,
		backgroundColor: styleConfig.colors.red,
		width: 336

	}
});
