import React, {
  AppRegistry,
  Component,
  View,
  ScrollView,
	Text,
	StatusBar,
	TouchableOpacity,

} from 'react-native';
import Button from 'react-native-button'
import styles from '../styles'
import {App} from './app'
import {Actions} from 'react-native-router-flux';


export class Launch extends Component {

	_onPressButton(event) {

	}
	render() {
    return(

				<ScrollView style={styles.main.launchContainer} >
					<Text allowFontScaling={false} style={styles.main.title} allowFontScaling={false}>ConMet Aftermarket</Text>
					<Text allowFontScaling={false} style={styles.main.subTitle} allowFontScaling={false}>Service Parts & Replacement Hubs</Text>
					<Text allowFontScaling={false} style={styles.main.legal} allowFontScaling={false}>ConMet is the leading supplier of wheel end technology for commercial vehicles in North America. This app is intended to direct the distributor and/or end-user to a readily available aftermarket replacement component or wheel end assembly.{'\n\n'}
					Due to the variety of vehicle applications and part numbers we supply to the original equipment manufacturers, this app is not all inclusive. In some cases this app will not have a reference to a direct aftermarket replacement part number. In that instance, we will direct you to our customer service team who can assist with finding the correct service part or wheel end assembly required to get the vehicle back in service.{'\n\n'}
					CAUTION: As you are guided through the app, it is important that you verify your responses. Failure to do so could result in the wrong service part or hub assembly recommendation. Wheel hubs are a safety critical component and installing the wrong component or assembly on a vehicle can result in premature failure.</Text>
          <Button allowFontScaling={false}  onPress={() => {Actions.app();}} containerStyle={styles.buttons.general} style={styles.buttons.text}>I AGREE</Button>
          <Text allowFontScaling={false} style={styles.main.copyright}>© 2016 Conmet. All rights reserved.</Text>
				</ScrollView>

			)
	}
}
