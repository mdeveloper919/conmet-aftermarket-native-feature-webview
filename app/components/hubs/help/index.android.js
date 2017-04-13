import React, {
  Component,
  View,
	Text,
	Linking
} from 'react-native';
import Video from 'react-native-video';
import {Actions} from 'react-native-router-flux';
import styles from '../../../styles'



import YesNoButton from '../../buttons/yesNo'
import Button from 'react-native-button'

export default class AssemblyHelp extends Component {
	openURL(url) {
		Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
	}
	videoError(data) {
		// console.log('error on load ', data)
	}
	onLoad(data) {
		// console.log('Duration: ', data.duration)
    this.setState({duration: data.duration});
  }
	onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }
	loadStart(data) {
		// console.log('Load Video ', data)
	}
	render() {
    const { showFilterLink } = this.props
    let proceed = null
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
					<Video source={{uri: 'helpvideo'}} // conmet-hub-identification020316.mp4 Can be a URL or a local file.
			       rate={1.0}                   // 0 is paused, 1 is normal.
			       volume={1.0}                 // 0 is muted, 1 is normal.
			       muted={false}                // Mutes the audio entirely.
			       paused={false}               // Pauses playback entirely.
			       resizeMode="cover"           // Fill the whole screen at aspect ratio.
			       repeat={false}                // Repeat forever.
			       playInBackground={false}     // Audio continues to play when app entering background.
			       playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown.
			       onLoadStart={this.loadStart.bind(this)} // Callback when video starts to load
			       onLoad={this.onLoad.bind(this)}    // Callback when video loads
			       onProgress={this.onProgress.bind(this)}    // Callback every ~250ms with currentTime
			       onEnd={() => { console.log('Done!') }}           // Callback when playback finishes
			       onError={this.videoError.bind(this)}    // Callback when video cannot be loaded
			       style={styles.main.videoPlayer} />

			 		 <YesNoButton
						onPress={()=> Actions.assemblyHelpRead()}
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
