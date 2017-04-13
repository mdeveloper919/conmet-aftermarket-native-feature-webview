import React, { Component, View, Text, ActivityIndicatorIOS, Image, Linking } from 'react-native';
import _ from 'lodash'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../../selectors'
import {showPreviousResult, showNextResult} from '../../../actions'
import {fetchImages} from '../../../actions/images'
import {Actions} from 'react-native-router-flux';
import {IMAGE_CDN} from '../../../config/constants'
import styles from '../../../styles'

import GeneralButton from '../../buttons/generalButton'
import Loading from '../../ui/loading'

class Result extends Component {
	constructor(props) {
		super(props)
		this.itemDetails = {};
	}

	componentDidMount() {
		const { item, images} = this.props;
	}

	showPrevious(idx, total) {

		if (idx !== 0) {
			// dispatch(showPreviousResult());
		}
	}

	showNext(idx, total) {

		// dispatch(showNextResult());
	}

	renderButtons() {
		let {idx, total} = this.props
		return total === 1;
	}

	handleNextClick() {
		// const {idx, total, dispatch} = this.props;
		// dispatch(showNextResult());
	}

	handlePreviousClick() {
		// const {idx, total, dispatch} = this.props;
		// dispatch(showPreviousResult());
	}

	renderPreviousBtn() {
		if (this.renderButtons()) {

		}
		return ''
	}

	renderNextBtn() {
		if (this.renderButtons()) {

		}
		return ''
	}

	onPressDetail(partNumber) {
		const { app, dispatch, images, fetchAssemblyDetails } = this.props
		Actions.detail({partNumber: partNumber})
	}
	addLinks(str, links = []) {
		if (str === undefined) {
			return null
		}
		str = str.replace('{{', '').replace('}}', '')
		let button = null

		if (links && links.length > 0){
			button = <GeneralButton style={styles.buttons.simpleTextButton} mainTextStyle={styles.buttons.simpleText} onPress={this.openURL.bind(this, 'https://conmetaftermarketpubliccdn.azureedge.net/documents/'+links[0])} mainText={'View Guidelines'} />
		}

		return (
			<View style={{flex: 1}} >
				<Text allowFontScaling={false} style={styles.main.resultNote}>{str}</Text>
				{button}
			</View>);
	}

	openURL(url) {
		Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        // console.log('Don\'t know how to open URI: ' + url);
      }
    });
	}

	render () {
	 let { idx, total, item, images, width } = this.props

	 if (_.isUndefined(item) || item.id === -1) {
		 return (<Loading
			 isFetching={app.isFetching}
			 viewStyle={styles.main.containerWithNav}
			 buttonStyle={[styles.main.centering, styles.main.loading]}
			 />)
	 }

	 let note = null;
	 if (!_.isUndefined(item.GawrNote)) {
		 note = this.addLinks(item.GawrNote.Text, item.GawrNote.Links)
	 }

	return (




		 	<View style={styles.main.resultCard}>
				<View style={styles.main.resultImage}>
				{item.Images.map((image, index) => {
		 		 	if (image.ImageId === item.mainImageId || image.ImageId === item.Images[0].ImageId) {
					 return <Image
						 	key={index}
							 source={{uri: IMAGE_CDN+image.ImageGuid+'.png', scale: 2}}
							 style={styles.main.resultImage}
							 />
		 		 }
		 	 })}
			 </View>

				<Text allowFontScaling={false} style={styles.main.resultTitle}>{item.title || item.Description}</Text>
				<Text allowFontScaling={false} style={styles.main.resultPartNumber}>#{item.PartNumber}</Text>
				{note}

				<GeneralButton mainTextStyle={styles.buttons.textCenterGeneral} onPress={this.onPressDetail.bind(this, item.PartNumber)} mainText={'See Details'} />
			</View>


	 )
 	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
