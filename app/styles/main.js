
import React, {
	StyleSheet
} from 'react-native'

import styleConfig from './config'

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		paddingTop: 50,
		marginTop: 0,
		flexDirection: 'column',
		backgroundColor: styleConfig.colors.darkGrey
	},
	scrollContainer: {
		marginTop: 0,
		flex: 1,
		flexDirection: 'column',
		backgroundColor: styleConfig.colors.darkGrey,
	},
	launchContainer: {
		flex: 1,
		padding: 30,
		paddingTop: 30,
		paddingBottom: 50,
		marginTop: 0,
		flexDirection: 'column',
		backgroundColor: styleConfig.colors.darkGrey
	},
	containerWithNav: {
		alignSelf: 'stretch',
		marginTop: 50,
		marginBottom: 10,
		flex: 1,
		paddingTop: 30,
		flexDirection: 'column',
		backgroundColor: styleConfig.colors.darkGrey,
		alignItems: 'center',
	},
	twoColumns: {
		flexDirection: 'row',
		width: 375, flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent:'center'
	},
	title: {
		fontSize: 40,
		textAlign: 'center',
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.main,
		marginBottom: 10,
		padding: 10
	},
	subHead: {
		fontSize: 26,
		textAlign: 'center',
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.main,
		marginBottom: 0,
		padding: 10

	},
	subHead2: {
		fontSize: 16,
		textAlign: 'center',
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.main,
		marginBottom: 0,
		padding: 0
	},
	subTitle: {
		fontSize: 30,
		textAlign: 'center',
		color: styleConfig.colors.midGrey,
		fontFamily: styleConfig.fonts.secondary,
		marginBottom: 20
	},
	legal : {
		fontSize: 10,
		textAlign: 'center',
		color: styleConfig.colors.midGrey
	},
	notFound : {
		textAlign: 'left',
		fontSize: 10,
		color: styleConfig.colors.midGrey,
		margin: 20,
	},
	centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    height: 80
  },
	assemblySearchInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: '#ffffff',
		padding: 10,
		marginRight: 20,
		marginLeft: 20
	},
	resultCard: {
		flex:  1,
		justifyContent: 'center',
    alignItems: 'center',
	},
	resultTitle: {
		textAlign: 'center',
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.main,
		fontSize: 20
	},
	resultNote: {
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.body,
		fontSize: 9,
		textAlign: 'center',
		marginTop: 10,
		paddingRight: 20,
		paddingLeft: 20
	},
	resultPartNumber: {
		textAlign: 'center',
		color: styleConfig.colors.copyLight,
		fontFamily: styleConfig.fonts.main,
		fontSize: 18
	},
	resultImage: {
		width: 200,
		height: 200,
		padding: 5,
		marginBottom: 30
	},
	detailMeta: {
		backgroundColor: '#ffffff',
		alignSelf: 'stretch',
		marginTop: 20,
		marginRight: 10,
		marginLeft: 10,
		padding: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: 336,
	},
	detailSpecs: {
		backgroundColor: styleConfig.colors.lightGrey,
		padding: 20,
		marginRight: 10,
		marginLeft: 10,
		flex: 1,
		flexDirection: 'column',
		width: 336,
	},
	detailImage: {
		width: 50,
		height: 50,
	},
	detailName: {
		color: styleConfig.colors.midGrey,
		fontFamily: styleConfig.fonts.main,
		fontSize: 20
	},
	detailPartNumber: {
		color: styleConfig.colors.red,
		fontFamily: styleConfig.fonts.main,
		fontSize: 18,
		paddingTop: 10
	},

	detailSpecsRow: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: .5,
		borderBottomColor: styleConfig.colors.midGrey,
		marginTop:10,
		padding: 0,
		paddingBottom: 10,
		width: 280,


	},
	detailSpecsHeadline: {
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.darkGrey,
		fontSize: 16,
	},
	detailsSpecsType: {
		flex: 1,
		flexDirection: 'row',
		fontSize: 12,
		textAlign: 'left',
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.description
	},
	detailSpecsValue: {
		flexDirection: 'row',
		width: 150,
		fontSize: 12,
		textAlign: 'right',
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.midGrey
	},
	detailMetaCorner: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderRightWidth: 20,
		borderTopWidth: 20,
		borderRightColor: 'transparent',
		borderTopColor: styleConfig.colors.darkGrey,
		right: 0, top: 0,
		position: 'absolute',
		transform: [{rotate: '90deg'}]
  },
	detailSpecsCorner: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderRightWidth: 20,
		borderTopWidth: 20,
		borderRightColor: 'transparent',
		borderTopColor: '#ffffff',
		right: 0, top: 0,
		position: 'absolute',
		transform: [{rotate: '90deg'}]
	},
	copyright: {
		fontSize: 9,
		color: styleConfig.colors.midGrey,
		textAlign: 'center',
		paddingTop: 10,
	},
	partsSection: {
		backgroundColor: styleConfig.colors.lightGrey,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
		paddingTop: 0,
		marginRight: 10,
		marginLeft: 10,
		marginTop: 20,
		flex: 1,
		flexDirection: 'column',
		width: 336,
		alignSelf: 'flex-start',
		alignItems: 'flex-start',
	},
	partsSectionRow: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: .5,
		borderBottomColor: styleConfig.colors.midGrey,
		marginTop:10,
		padding: 0,
		paddingBottom: 10,
		width: 280,
	},

	// PARTS
	partsAssemblyHeaderSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	partsAssemblyHeaderName: {
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.midGrey,
		fontSize: 20,
		flexDirection: 'row',
	},
	partsAssemblyHeaderNumber: {
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.red,
		fontSize: 20,
		paddingLeft: 20,
		flexDirection: 'row',
	},

	partsHeadlineView: {
		borderBottomWidth: .5,
		borderBottomColor: styleConfig.colors.midGrey,
		marginTop:4,
		padding: 0,
		paddingBottom: 10,
		width: 280,
		alignSelf: 'flex-start',
		alignItems: 'flex-start',
	},
	partsHeadline: {
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.red,
		fontSize: 20,
		marginTop: 10,
	},
	partsType: {
		flex: 1,
		flexDirection: 'row',
		fontSize: 12,
		textAlign: 'left',
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.description
	},
	partsValue: {
		flexDirection: 'row',
		width: 120,
		fontSize: 12,
		textAlign: 'right',
		fontFamily: styleConfig.fonts.main,
		color: styleConfig.colors.midGrey
	},
	videoPlayer: {
		alignSelf: 'stretch',
		height: 238,
		backgroundColor: 'transparent',
		marginVertical: 0
	}



});
