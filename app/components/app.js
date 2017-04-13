import React, {
  Component,
  View,
	Text,
	TouchableOpacity,

} from 'react-native';

import {Actions} from 'react-native-router-flux';
import DividedButton from './buttons/dividedButton'
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../selectors'

import styles from '../styles'




class App extends Component {

	componentDidMount() {
		const { fetchCategories } = this.props
		fetchCategories()
	}

	render() {
		return(

				<View style={styles.main.container} >
					<Text style={styles.main.subHead} allowFontScaling={false}>What are you looking for?</Text>

          <DividedButton
            onPress={Actions.hubs}
            style={styles.buttons.general}
            mainText='Replacement Hub'
            subText='Replace your hub with one of our OEM approved hub assemblies'
          />

          <DividedButton
            onPress={Actions.partsSearch}
            style={styles.buttons.general}
            mainText='Replacement Parts'
            subText='Service your hub with genuine ConMet service parts'
          />

				</View>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
