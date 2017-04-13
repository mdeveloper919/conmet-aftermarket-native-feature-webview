import React, {
  Component,
  View,
	Text,
	TouchableOpacity
} from 'react-native';

import Button from 'react-native-button'
import styles from '../../styles'

class YesNoButton extends Component {

	render() {

		return (
			<Button allowFontScaling={false} disabled={this.props.disabled}
							containerStyle={this.props.disabled ? styles.buttons.disabled : styles.buttons.general}
							style={styles.buttons.text}
							onPress={() => this.props.onPress()}>
				<Text allowFontScaling={false} style={styles.buttons.yesNo}>{this.props.yesNoText.toUpperCase()}</Text>
				<Text allowFontScaling={false} style={styles.buttons.yesNoRight}>{this.props.subText}</Text>
			</Button>
		);
	}
}

YesNoButton.propTypes = {
  onPress: React.PropTypes.func,
  yesNoText: React.PropTypes.string,
	subText: React.PropTypes.string,
	disabled: React.PropTypes.bool
};

export default YesNoButton
