import React, {
  Component,
  View,
	Text,
  ActivityIndicatorIOS
} from 'react-native';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import styles from '../../styles'

import GeneralButton from '../buttons/generalButton'
import Loading from '../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../actions/filters'

const FILTERIDX=5


class HubMountingSystem extends Component {
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
      <View style={styles.main.containerWithNav} >
        <Text allowFontScaling={false} style={styles.main.subHead}>Hub Mounting System</Text>
          {app.filterResults[FILTERIDX].map((result, index) => {
						return (<GeneralButton
							style={styles.buttons.general}
							onPress={()=> { setFilter(FILTERIDX, {hamnt: result.Id}, app)}}
							mainText={result.Name}
	            key={index}
						/>)
        })}
      </View>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HubMountingSystem);
