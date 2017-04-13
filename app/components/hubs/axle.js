import React, {
  Component,
  View,
	Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import styles from '../../styles'

import GeneralButton from '../buttons/generalButton'
import Loading from '../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../actions/filters'

const FF_FRONT = 1
const FL_FRONT = 2
const R_DRIVE = 3
const TN_TRAILER = 4
const TP_TRAILER = 5
const DRIVE = 1
const FRONT = 2
const TRAILER = 3

const FILTERIDX=4


class Result extends Component {

	render() {


		const {result, active, onClick } = this.props
		return(
			<GeneralButton
				style={styles.buttons.general}
        disabledStyle={styles.buttons.disabledHorizontal}
        onPress={onClick}
        mainText={result.AftermarketAxle} >
        <Text allowFontScaling={false} style={styles.buttons.description}>Inner Bearing - {result.BearingDescriptionInboard}{'\n\n'}
			       Outer Bearing - {result.BearingDescriptionOutboard}{'\n\n'}
        </Text>
      </GeneralButton>
		)
	}
}

class Axle extends Component {
  componentDidMount() {

		const { dispatch, app, fetchFilter} = this.props
		fetchFilter(FILTERIDX, app)

	}

  shouldComponentUpdate(nextProps, nextState) {
    const { dispatch, app, goBack} = nextProps
    if (app.goingBack == true && app.currentIndex === FILTERIDX && app.filterResults[FILTERIDX].length === 0) {
      goBack(app)
      return false;
    }
    return true;
  }

	render() {
		const {app, setFilter} = this.props
    if (app.isFetching) {
      return (
        <Loading
					isFetching={app.isFetching}
					viewStyle={styles.main.containerWithNav}
					buttonStyle={[styles.main.centering, styles.main.loading]}
					/>

      )
    }
		return(
			<ScrollView style={styles.main.scrollContainer}>
        <View style={styles.main.containerWithNav}>
        <Text allowFontScaling={false} style={styles.main.subHead}>Choose the Hub by Axle Type or Bearing Number:</Text>

          {app.filterResults[FILTERIDX].map((result, index) => {
          return <Result key={index} result={result} onClick={()=> { setFilter(FILTERIDX, {aaxna: result.AftermarketAxleId }, app)}}  />
        })}
			</View>
      </ScrollView>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Axle);
