
import React, {
	StyleSheet
} from 'react-native'

import styleConfig from './config'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#000000'
	},
	titleText: {
		marginTop: 30,
		color: '#ffffff',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 0
	},
	navBar: {
		backgroundColor: styleConfig.colors.darkGrey,
		borderWidth: 0

	},
	link: {
		color: styleConfig.colors.red,
		fontSize: 16,
		margin: 10

	}
});
