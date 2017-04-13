import React, {Component, View, ActivityIndicatorIOS} from 'react-native'


class Loading extends Component {

	render() {
		let { isFetching, viewStyle, buttonStyle } = this.props
		return (<View style={viewStyle} >
			<ActivityIndicatorIOS
				animating={isFetching}
				style={buttonStyle}
				size="large"
			/>
		</View>)
	}
}

export default Loading
