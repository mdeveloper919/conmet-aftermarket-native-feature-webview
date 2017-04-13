/* @flow */

import React, {WebView, View, StatusBar, Linking} from 'react-native';

import { Provider } from 'react-redux';
class Root extends React.Component {
	constructor(props) {
    super(props);

    this.onNavigationBlocked = this.onNavigationBlocked.bind(this);
  }

	onNavigationBlocked({ nativeEvent }) {
    const { url } = nativeEvent;
 	// Url isn't inside github.com, open it in the browser
    Linking.openURL(url);
  }
	openExternalLink(req) {
    const isLocal = req.url.search('https://aftermarket.conmetwheelends.com') !== -1;
		if (isLocal) {
      return true;
    } else {
      Linking.openURL(req.url);
			return false;
    }
  }


  render() {
		const uri = 'https://aftermarket.conmetwheelends.com/';
    return (
			<WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
				onShouldStartLoadWithRequest={this.openExternalLink}
				onNavigationStateChange={this.openExternalLink}
      />

    );
  }
}

export default Root;
