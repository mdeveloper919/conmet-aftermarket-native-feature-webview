import React, {
  Component,
  View,
	Text,
	Linking,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import styles from '../styles'
import Button from 'react-native-button'



export default class ConmetLinks extends Component {
	openURL(url) {
		Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        // console.log('Don\'t know how to open URI: ' + url);
      }
    });
	}
	render() {
		return(

				<View style={styles.main.containerWithNav} >
					<Text allowFontScaling={false} style={styles.main.subHead}>More Information</Text>

					<Button onPress={()=> this.openURL('http://www.conmet.com/contact-us/')}>
						<Text allowFontScaling={false} style={styles.app.link}>Contact Us</Text>
					</Button>

					<Button onPress={()=> this.openURL('http://www.conmet.com/')}>
						<Text allowFontScaling={false} style={styles.app.link}>Visit ConMet.com</Text>
					</Button>

					<Button onPress={()=> this.openURL('http://store.conmet.com/')}>
						<Text allowFontScaling={false} style={styles.app.link}>Product Showroom</Text>
					</Button>

					<Button onPress={()=> Actions.launch()}>
						<Text allowFontScaling={false} style={styles.app.link}>Disclaimer</Text>
					</Button>

					<Button onPress={()=> this.openURL('http://www.conmet.com/training')}>
						<Text allowFontScaling={false} style={styles.app.link}>Hub Training 2.0</Text>
					</Button>


				</View>

			)
	}
}
