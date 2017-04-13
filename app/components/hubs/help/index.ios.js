
import React, {
  Component,
  View,
	Text,
	Linking
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import styles from '../../../styles'

import YouTube from 'react-native-youtube'

import YesNoButton from '../../buttons/yesNo'
import Button from 'react-native-button'

export default class AssemblyHelp extends Component {
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

    const { showFilterLink } = this.props
    let proceed = null;
    let actionFn = Actions.pop;
    if (showFilterLink === true) {
      let actionFn = Actions.assemblySearch;
      proceed = <YesNoButton
        onPress={()=> Actions.truckType()}
        yesNoText='No'
        subText={'I still don\'t know. Proceed without the it.'}
      />
    }
		return(

				<View style={styles.main.containerWithNav} >
					<Text allowFontScaling={false} style={styles.main.subHead}>Do you know your hub assembly number?</Text>
						<YouTube
						ref="youtubePlayer"
					  videoId="9yVp9V2JuEs" // The YouTube video ID
					  play={false}           // control playback of video with true/false
					  hidden={false}        // control visiblity of the entire view
					  playsInline={true}    // control whether the video should play inline

					  style={{alignSelf: 'stretch', height: 238, backgroundColor: 'transparent', marginVertical: 0}}

						/>
					<YesNoButton
						//onPress={()=> this.openURL('https://aftermarket.conmetwheelends.com/hub-selection/find-assembly-detail')}
            onPress={() => Actions.assemblyHelpRead()}
						yesNoText='Read'
						subText='More about finding your assembly number'
					/>

          <YesNoButton
						onPress={()=> actionFn()}
						yesNoText='Yes'
						subText='I know my number now'
					/>

        {proceed}




				</View>

			)
	}
}
