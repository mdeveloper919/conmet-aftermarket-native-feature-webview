import React, {
  Component,
  View,
	Text,
	ScrollView,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');
import _ from 'lodash'
import ViewPager from 'react-native-viewpager'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../../selectors'
import {fetchAssembly} from '../../../actions/assembly'
import {Actions} from 'react-native-router-flux';
import styles from '../../../styles'

import GeneralButton from '../../buttons/generalButton'
import Loading from '../../ui/loading'

import { setActiveFilterValue, fetchFilters } from '../../../actions/filters'

import Result from './result'
import NoResults from './noResults'
import Icon from 'react-native-vector-icons/EvilIcons';
const rightArrow = (<Icon name="chevron-right" size={50} color="#ffffff" />)
const leftArrow = (<Icon name="chevron-left" size={50} color="#e0e0e0" />)

class ResultsView extends Component {
  constructor(props) {

    super(props);
    this.state = {
      size: {width: width, height: height},
    };

  }
  _renderPage(data, pageId) {
    return (
      <Result idx={pageId} key={pageId} item={data} />
    )
  }
  _onChangePage(page) {
    // notifyMessage('Current page: ' + page);
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
    } else if (results.items.length === 0){
			return (<NoResults />)
		}
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1.PartNumber !== p2.PartNumber,
    });
    dataSource: dataSource.cloneWithPages(results.items)
		return(
      <View style={styles.main.containerWithNav}>

      {results.items.map((item, index) => {
          if (index === 0) {


          var title = ''
          if (results.items.length > 1) {
            title = 'Success! The following ConMet hubs are recommended'
          } else if (_.isUndefined(app.lastChoice) || _.isUndefined(app.lastChoice.Name)) {
            title = 'Success! The following ConMet hub is recommended'
          } else {
            title = 'Success! The following ConMet '+app.lastChoice.Name+' hub is recommended'
          }
          return <Text allowFontScaling={false} key={index} style={styles.main.subHead}>{title}</Text>
          }
        })}
        <ScrollView style={styles.main.scrollContainer} >
        <Swiper style={{flex: 1}} height={400}
          paginationStyle={{
            bottom: -30
          }}
          buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: -60, left: 0, flex: 1, paddingHorizontal: 0, paddingVertical: 0, justifyContent: 'space-between'}}
          showsButtons={(results.items.length > 1)}
          nextButton={<Text allowFontScaling={false} style={styles.buttons.resultsRightArrow}>{rightArrow}</Text>}
          prevButton={<Text allowFontScaling={false} style={styles.buttons.resultsLeftArrow}>{leftArrow}</Text>}
          dot={<View style={{backgroundColor:'rgba(255,255,255,.2)', width: 6, height: 6,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: '#ffffff', width: 6, height: 6, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         >
          {results.items.map((item, index) => {
            return <Result idx={index} key={index} item={item} />
          })}
        </Swiper>
      </ScrollView>
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
