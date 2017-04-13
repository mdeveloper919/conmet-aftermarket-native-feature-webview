import React, {
  Component,
  View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import styles from '../../styles'

import GeneralButton from '../buttons/generalButton'

const TRUCK=1
const TRAILER=2
const DISC=2
const DRUM=1
const FILTERIDX=2
const NEXT_FILTER_PATH = '/hub-selection/truck-make'


class TruckType extends Component {
	_onPressButton(event) {
		// need to go to the initial page of the app

	}
	render() {
		const { app, setFilter, setActive } = this.props;


		return(

				<View style={styles.main.containerWithNav} >
					<Text allowFontScaling={false} style={styles.main.subHead}>Are you looking for a hub for your</Text>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>

					<GeneralButton
						style={styles.buttons.generalTruckType}
						onPress={()=> { setFilter(FILTERIDX, {tcomp: TRUCK, brkty: DRUM}, app)}}
						mainText='Truck with Drum Brakes'
					/>

					<GeneralButton
						style={styles.buttons.generalTruckType}
						disabledStyle={styles.buttons.disabledHorizontal}
						onPress={()=> { setFilter(FILTERIDX, {tcomp: TRAILER, brkty: DRUM}, app)}}
						mainText='Trailer with Drum Brakes'
					/>

					</View>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>

						<GeneralButton
							style={styles.buttons.generalTruckType}
							disabledStyle={styles.buttons.disabledHorizontal}
							onPress={()=> { setFilter(FILTERIDX, {tcomp: TRUCK, brkty: DISC}, app)}}
							mainText='Medium-Duty Truck with Disc Brakes'
						/>



				</View>


					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>

						<GeneralButton
						style={styles.buttons.generalTruckType}
						disabledStyle={styles.buttons.disabledHorizontal}
						onPress={()=> { /*console.log('disabled')*/}}
						disabled={true}
						mainText='Heavy-Duty Truck with Disc Brakes'
						subText='Coming Soon'
					/>

						<GeneralButton
							style={styles.buttons.generalTruckType}
							disabledStyle={styles.buttons.disabledHorizontal}
							onPress={()=> {/*console.log('disabled')*/}}
							disabled={true}
							mainText='Trailer with Disc Brakes'
							subText='Coming Soon'
						/>
					</View>

				</View>

			)
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(TruckType);
