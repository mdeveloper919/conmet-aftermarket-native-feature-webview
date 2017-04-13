import React, {
  Component,
  View,
	Text,
	TouchableOpacity
} from 'react-native';

import styles from '../../styles'

class GeneralButton extends Component {

	render() {
    const { disabled } = this.props
		let { style, disabledStyle, mainTextStyle, children } = this.props
    if (!style) {
      style = styles.buttons.general
    }
    if (!disabledStyle) {
      disabledStyle = styles.buttons.disabled
    }
    if (!mainTextStyle) {
      mainTextStyle = styles.buttons.textLeftGeneral
    }
    let subText = null
    if (this.props.subText) {
      subText = <Text allowFontScaling={false} style={styles.buttons.textSub}>{this.props.subText}</Text>
    }

		return (
			<TouchableOpacity onPress={() => this.props.onPress()} style={disabled ? disabledStyle : style}>
				<Text allowFontScaling={false} style={mainTextStyle}>{this.props.mainText}</Text>
				{subText}
        {children}
			</TouchableOpacity>
		);
	}
}

GeneralButton.propTypes = {
  onPress: React.PropTypes.func,
  mainText: React.PropTypes.string,
	subText: React.PropTypes.string,
  style: React.PropTypes.number,
  disabledStyle: React.PropTypes.number,
	disabled: React.PropTypes.bool
};

export default GeneralButton
