import React, {Component, Text, View} from 'react-native';
import Drawer from 'react-native-drawer';

import {DefaultRenderer} from 'react-native-router-flux';

class Menu extends Component {
	render() {
		const drawer = this.context.drawer;
		return (
			<View>
				<Text allowFontScaling={false} >Hello</Text>
			</View>
		)
	}
}

Menu.contextTypes = {
    drawer: React.PropTypes.object
};

export default class extends Component {
    render(){
        return (
					<Drawer
					type="static"
					content={< Menu />}
					openDrawerOffset={100}
					styles={{main: {shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3}}}
					tweenHandler={Drawer.tweenPresets.parallax}
	 				>
					</Drawer>
        );
    }
}
