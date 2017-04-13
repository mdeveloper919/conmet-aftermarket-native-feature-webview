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

const FILTERIDX=6


class GAWR extends Component {
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

  formatNumber (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }


	convertToKg(min, max) {
		var maxKg, minKg
		maxKg = Math.round(max * 0.453592).toLocaleString();
		minKg = Math.round(min * 0.453592).toLocaleString();
		return this.formatNumber(minKg)+'-'+this.formatNumber(maxKg)+' kg'
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
        <Text allowFontScaling={false} style={styles.main.subHead}>Choose the GAWR</Text>
        <Text allowFontScaling={false} style={styles.main.subHead2}>(Gross Axle Weight Rating):</Text>
          {app.filterResults[FILTERIDX].map((result, index) => {

            if (result.MinGawrPound !== undefined && result.MaxGawrPound !== undefined) {
  						let min = result.MinGawrPound.toLocaleString()
  						let max = result.MaxGawrPound.toLocaleString()
            	let display = ''
  						if (min === '0') {
  							display = 'Up to '+this.formatNumber( max )+' lbs.'
  						} else {
  							display = this.formatNumber( min ) +' - ' + this.formatNumber( max )+' lbs.'
  						}
  						let kilos = this.convertToKg(result.MinGawrPound, result.MaxGawrPound)
  						return (<GeneralButton
                key={index}
  							style={styles.buttons.general}
  			        disabledStyle={styles.buttons.disabledHorizontal}
  			        onPress={()=> { setFilter(FILTERIDX, {gawrr: result.Id}, app)}}
  			        mainText={display}
  							subText={kilos} />)
            }
        })}
      </View>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GAWR);
