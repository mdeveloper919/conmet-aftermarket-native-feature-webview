import React, {
  Component,
  View,
	Text,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import styles from '../styles'



import YesNoButton from './buttons/yesNo'
import Button from 'react-native-button'

export class Hubs extends Component {
	render() {
		return(

				<View style={styles.main.containerWithNav} >
					<Text allowFontScaling={false} style={styles.main.subHead}>Do you know your hub assembly number?</Text>

					<YesNoButton
						onPress={()=> Actions.assemblySearch()}
						yesNoText='Yes'
						subText='I know the hub assembly number.'
					/>

					<YesNoButton
						onPress={() => Actions.assemblyHelp({showFilterLink: true})}
						yesNoText='No'
						subText='Help me find the assembly number.'
					/>

					<YesNoButton
						onPress={()=> Actions.truckType()}
						yesNoText='No'
						subText='Proceed without the number.'
					/>


				</View>

			)
	}
}
