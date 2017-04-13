import React, {
  Component,
  View,
  ScrollView,
	Text,
	WebView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import styles from '../../../styles'



import YesNoButton from '../../buttons/yesNo'
import Button from 'react-native-button'
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://m.facebook.com';


export default class AssemblyHelpRead extends Component {

  onShouldStartLoadWithRequest(event) {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  }


	render() {
		return(

				<ScrollView contentContainerStyle={styles.main.containerWithNav} >
          <WebView
					ref={WEBVIEW_REF}
          style={{ padding: 10, backgroundColor: 'rgba(255,255,255,0.8)', width: 300, height: 500,}}
          source={{uri: 'https://aftermarket.conmetwheelends.com/mobile-help'}}
          javaScriptEnabled={true}
          decelerationRate="normal"

        />


    </ScrollView>

			)
	}
}
