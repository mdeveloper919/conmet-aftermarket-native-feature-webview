import React, {
  Component,
  View,
	Text,
  Image,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import {fetchAssembly} from '../../actions/assembly'
import styles from '../../styles'
import {Actions} from 'react-native-router-flux'
import GeneralButton from '../buttons/generalButton'
import Loading from '../ui/loading'
import { IMAGE_CDN } from '../../config/constants'

import { setActiveFilterValue, fetchFilters } from '../../actions/filters'



class Detail extends Component {
  componentDidMount() {
		const { app, dispatch, partNumber, images, fetchAssemblyDetails } = this.props
		fetchAssemblyDetails(partNumber)
	}

	render() {
		const {app, assembly, images } = this.props
    if (assembly.isFetching) {
      return (
        <Loading
					isFetching={assembly.isFetching}
					viewStyle={styles.main.containerWithNav}
					buttonStyle={[styles.main.centering, styles.main.loading]}
					/>

      )
    }
		return(
      <ScrollView style={styles.main.scrollContainer}>
        <View style={styles.main.containerWithNav}>
        <Text allowFontScaling={false} style={styles.main.subHead}>Product Details</Text>

          {assembly.result.map((result, index) => {

          return (
            <View key={index} style={{marginLeft: 0, marginRight: 0, flex: 1}}>
            <View style={styles.main.detailMeta} >
              <View style={styles.main.detailMetaCorner}></View>
              <View style={{flex: 1, alignSelf:'center'}}>
      					<Text allowFontScaling={false} style={styles.main.detailName}>{result.Description}</Text>
      					<Text allowFontScaling={false} style={styles.main.detailPartNumber}>#{result.PartNumber}</Text>
              </View>
              <View style={{top: 0, right: 0}}>
                {result.Images.map((image, index) => {

                      return (<Image
           						 	key={index}
           							 source={{uri: IMAGE_CDN+image.ImageGuid+'.png', scale: 2}}
           							 style={styles.main.detailImage}
           							 />)

                  })
                }
              </View>
  				  </View>
            <View style={styles.main.detailSpecs} >
              <View style={styles.main.detailSpecsCorner}></View>
              <Text allowFontScaling={false} style={styles.main.detailSpecsHeadline}>Product Specs</Text>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Material
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.Material}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Axle Position
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.AxlePosition}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Axle
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.Axle}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Assembly Type
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.HubAssemblyType}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Bearing {result.BearingNumbersType} (Inboard)
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.BearingNumberInboard}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Bearing {result.BearingNumbersType} (Outboard)
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.BearingNumberOutboard}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Compatible Brake Type
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.BrakeType}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFont Scaling={false}style={styles.main.detailsSpecsType}>
                  Hub Mounting System
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.HubMountingSystem}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Wheel Stud Standout (in.)
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.WheelStudStandoutInch}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Wheel Material
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.WheelMaterial}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Flange Offset (in.)
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.FlangeOffsetInch}
                </Text>
              </View>
              <View style={styles.main.detailSpecsRow}>
                <Text allowFontScaling={false} style={styles.main.detailsSpecsType}>
                  Weight (lbs.)
                </Text>
                <Text allowFontScaling={false} style={styles.main.detailSpecsValue}>
                  {result.WeightPound}
                </Text>
              </View>

            </View>
          </View>
        )
  			})}

        <GeneralButton
          mainTextStyle={styles.buttons.textCenterGeneral}
          onPress={() => Actions.pop()}
          mainText={'Return To Results'}
          />
    </View>
    </ScrollView>

			)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
