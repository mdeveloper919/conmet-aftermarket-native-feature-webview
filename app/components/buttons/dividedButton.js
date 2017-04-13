import React, {
  Component,
  View,
	Text,
	TouchableOpacity
} from 'react-native';

import styles from '../../styles'

class DividedButton extends Component {

	render() {
		const {disabled, style} = this.props
    let dividerStyle = styles.buttons.divider
    if (disabled) {
      dividerStyle = styles.buttons.dividerDisabled
    }
		return (
			<TouchableOpacity onPress={() => this.props.onPress()} style={disabled ? styles.buttons.disabled : this.props.style}>
				<Text allowFontScaling={false} style={styles.buttons.textLeft}>{this.props.mainText}</Text>
				<View style={dividerStyle}>
				<Text allowFontScaling={false} style={styles.buttons.textSub}>{this.props.subText}</Text>
			</View>
			</TouchableOpacity>
		);
	}
}

DividedButton.propTypes = {
  onPress: React.PropTypes.func,
  mainText: React.PropTypes.string,
	subText: React.PropTypes.string,
  style: React.PropTypes.number,
	disabled: React.PropTypes.bool
};

export default DividedButton
