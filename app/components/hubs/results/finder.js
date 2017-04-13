import React, {
  Component,
  View,
	Text,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../../selectors'
import {fetchAssembly} from '../../../actions/assembly'
import {Actions} from 'react-native-router-flux';
import styles from '../../../styles'

import GeneralButton from '../../buttons/generalButton'
import Loading from '../../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../../actions/filters'

import ResultsView from './view'

class Results extends Component {
  componentDidMount() {
		const { app, getResults} = this.props
		getResults(app)
	}

	render() {
		return (
      <ResultsView />
			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
