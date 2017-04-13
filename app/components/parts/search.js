import React, {
  Component,
  View,
	Text,
	TextInput,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import {fetchAssembly} from '../../actions/assembly'
import {Actions} from 'react-native-router-flux';
import styles from '../../styles'

import GeneralButton from '../buttons/generalButton'
import Loading from '../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../actions/filters'

class Search extends Component {
	constructor(props) {
    super(props);
    this.state = {
      assemblyId: null,
    };
  }

	render() {
		const {app, results, images } = this.props
    if (results.isFetching) {
      return (
        <Loading
					isFetching={results.isFetching}
					viewStyle={styles.main.containerWithNav}
					buttonStyle={[styles.main.centering, styles.main.loading]}
					/>

      )
    }
		return(
      <View style={styles.main.containerWithNav} >
				<Text allowFontScaling={false} style={styles.main.subHead}>Enter your hub assembly number</Text>

				<TextInput
					keyboardType='numeric'
					maxLength={8}
					placeholder='6 or 8 digit assembly number (10030165)'
					clearButtonMode='always'
					keyboardAppearance='dark'
			    style={styles.main.assemblySearchInput}
			    onChangeText={(assemblyId) => this.setState({assemblyId})}
			    value={this.state.assemblyId}
  			/>

				<GeneralButton
					mainText={'Continue'}
					onPress={() => Actions.partsSearchResults({id: this.state.assemblyId})}
				/>

			<GeneralButton
					onPress={() => Actions.assemblyHelp()}
					mainText={'Help me find the assembly number.'}
				/>

      </View>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
