import React, {
  Component,
  View,
	Text,
	Linking,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import styles from '../styles'
import Button from 'react-native-button'



export default class Error extends Component {

	render() {
		return(

				<View style={styles.main.containerWithNav} >
					<Text allowFontScaling={false} style={styles.main.subHead}>An error occurred!</Text>
					<Text allowFontScaling={false} style={styles.main.subHead2}>We are sorry but an error occurred communicating with the server. Please try again later.</Text>
					<Button allowFontScaling={false} style={styles.buttons.general}>Home</Button>
				</View>

			)
	}
}
