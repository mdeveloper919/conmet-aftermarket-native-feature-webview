import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import styles from '../../styles'


class Back extends React.Component {

    render(){
			const { app, goBack } = this.props
        return <Text allowFontScaling={false} style={{
        width: 80,
        height: 37,
        position: 'absolute',
        bottom: 4,
        right: 2,
        padding: 8,
    }}>Back</Text>
    }
}
