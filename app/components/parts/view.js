import React, {
  Component,
  View,
	Text,
	ScrollView,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');
import _ from 'lodash'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import {fetchAssembly} from '../../actions/assembly'
import {Actions} from 'react-native-router-flux';
import styles from '../../styles'

import GeneralButton from '../buttons/generalButton'
import Loading from '../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../actions/filters'

import { PARTTYPES } from '../../config/constants'

const FULLREPLACE = [115]
const SERVICEPARTS = [220, 5, 6, 7, 8, 101]
const SERVICEKITS = [217, 218, 219, 221]
const SPINDLENUTS = [222, 223, 226, 227]

import NoResults from '../hubs/results/noResults'

class ResultsView extends Component {
  constructor(props) {

    super(props);
    this.state = {
      size: {width: width, height: height},
    };

  }

	renderTable(viewArray = [], item) {
		if (!viewArray) {
			return null
		}

		let view = viewArray.map((part, index) =>{
			let appendStr = '';
			if (item.Usages && item.Usages.length > 0) {
				appendStr = item.Usages[part.UsageId]
			}

			if (viewArray.length > 1 && part.TypeId === 115) {
				if (part.Description.indexOf('PreSet') > -1) {
					return (
						<View style={styles.main.partsSectionRow} key={index}>
							<Text allowFontScaling={false} style={styles.main.partsType}>{item.AftermarketPartTypeName+appendStr}</Text>
							<Text allowFontScaling={false} style={styles.main.partsValue}>{part.PartNumber}</Text>
						</View>
					)
				}
			} else {
				return (
					<View style={styles.main.partsSectionRow} key={index}>
						<Text allowFontScaling={false}  style={styles.main.partsType}>{item.AftermarketPartTypeName+appendStr}</Text>
						<Text allowFontScaling={false} style={styles.main.partsValue}>{part.PartNumber}</Text>
					</View>
				)
			}


		})

		return view
	}



	render() {

		const { parts, dispatch, images, app, history } = this.props

				if (parts.isFetching) {
					return (<Loading
						isFetching={parts.isFetching}
						viewStyle={styles.main.containerWithNav}
						buttonStyle={[styles.main.centering, styles.main.loading]}
						/>)
				}
				if (parts.AftermarketParts.length === 0) {
					return (<NoResults />)
				}

				let replacementHeader, serviceKitHeader, servicePartHeader, spindleNutsHeader = null

				parts.AftermarketParts.map((item, index) => {
					 if (-1 !== FULLREPLACE.indexOf(item.TypeId)) {
						 replacementHeader = <View style={styles.main.partsHeadlineView}><Text allowFontScaling={false}  style={styles.main.partsHeadline}>Full Replacement Hub</Text></View>
					 }

					 if (-1 !== SERVICEKITS.indexOf(item.TypeId)) {
						 serviceKitHeader = <View style={styles.main.partsHeadlineView}><Text allowFontScaling={false}  style={styles.main.partsHeadline}>Service & Rebuild Kits</Text></View>
					 }

					 if (-1 !== SERVICEPARTS.indexOf(item.TypeId)) {
						 servicePartHeader = <View style={styles.main.partsHeadlineView}><Text allowFontScaling={false} style={styles.main.partsHeadline}>Service Parts</Text></View>
					 }

					 if (-1 !== SPINDLENUTS.indexOf(item.TypeId)) {
						 spindleNutsHeader = <View style={styles.main.partsHeadlineView}><Text allowFontScaling={false} style={styles.main.partsHeadline}>Spindle Nut Kits</Text></View>
					 }
				})

		return(
      <View style={styles.main.containerWithNav}>

						<Text allowFontScaling={false} style={styles.main.subHead} allowFontScaling={false}>Hub Components Search Results for:</Text>
							<View style={styles.main.partsAssemblyHeaderSection}>
								<Text allowFontScaling={false} style={styles.main.partsAssemblyHeaderName}>{parts.HubAssemblyDescription}</Text>
								<Text allowFontScaling={false} style={styles.main.partsAssemblyHeaderNumber}>#{parts.HubAssemblyNumber}</Text>
							</View>
							<View style={{marginLeft: 0, marginRight: 0, flex: 1}}>
								<View style={styles.main.partsSection} >
		              {replacementHeader}
									{PARTTYPES.map((item, index) => {
										if (-1 < FULLREPLACE.indexOf(item.PartTypeId)) {
											let filtered = _.filter(parts.AftermarketParts, {TypeId: item.PartTypeId})
											return this.renderTable(filtered, item)
										}

									})}

									{serviceKitHeader}
									{PARTTYPES.map((item, index) => {
										if (-1 < SERVICEKITS.indexOf(item.PartTypeId)) {
											let filtered = _.filter(parts.AftermarketParts, {TypeId: item.PartTypeId})
											return this.renderTable(filtered, item)
										}

									})}

									{servicePartHeader}

									{PARTTYPES.map((item, index) => {
										if (-1 < SERVICEPARTS.indexOf(item.PartTypeId)) {
											let filtered = _.filter(parts.AftermarketParts, {TypeId: item.PartTypeId})
											return this.renderTable(filtered, item)
										}

									})}

									{spindleNutsHeader}

									{PARTTYPES.map((item, index) => {
										if (-1 < SPINDLENUTS.indexOf(item.PartTypeId)) {
											let filtered = _.filter(parts.AftermarketParts, {TypeId: item.PartTypeId})
											return this.renderTable(filtered, item)
										}

									})}


		            </View>

						</View>

						<GeneralButton
							onPress={() => Actions.partsSearch()}
							mainText={'Return to Search'}
						/>




      </View>




			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultsView);

// style={{flex: 1, flexDirection:'column', width: this.state.size.width-60 }}
// indicatorStyle={'white'}
// centerContent={true}
// showsHorizontalScrollIndicator={true}
// horizontal={true}
// pagingEnabled={true}
// >
