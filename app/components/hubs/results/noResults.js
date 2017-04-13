import React, {Text, View, Component, Linking} from 'react-native'
import styles from '../../../styles'
import GeneralButton from '../../buttons/generalButton'
class NoResults extends Component {
	openURL(url) {
		Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        // console.log('Don\'t know how to open URI: ' + url);
      }
    });
	}
	render(){
		return (
			<View style={styles.main.containerWithNav}>
				<Text allowFontScaling={false} style={styles.main.subHead}>Sorry. No results were found.</Text>
				<Text allowFontScaling={false} style={styles.main.notFound}>This app is not all inclusive. The part number you entered is not referenced in this database,
					please verify that you’ve entered the correct assembly number. If you get the same result,
					please click on the link below to access our more extensive engineering hub catalog or
					call 1-800-547-9473 and speak directly to one of our customer service professionals to identify
					the replacement hub part  number (service part) you need.
					</Text>
					<GeneralButton
	          mainTextStyle={styles.buttons.textCenterGeneral}
						mainText={'ConMet Online Parts Catalog'}
						onPress={() => this.openURL('https://vdm.conmet.com/HubCatalog/')}/>

						<GeneralButton
							mainTextStyle={styles.buttons.textCenterGeneral}
							mainText={'Call customer service'}
							onPress={() => this.openURL('tel://1-800-547-9473')}/>

			</View>
		)
	}
}

export default NoResults
