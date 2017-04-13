import React, {Component, View, StatusBar} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../selectors'

import ConmetNavBar from './ui/conmetNavBar'
import {Launch} from './launch'
import App from './app'
import {Hubs} from './hubs'
import TruckType from './hubs/truckType'
import TruckMake from './hubs/truckMake'
import Axle from './hubs/axle'
import MountingSystem from './hubs/mountingSystem'
import GAWR from './hubs/gawr'
import Stud from './hubs/stud'
import WheelType from './hubs/wheelType'
import Material from './hubs/material'
import HubType from './hubs/hubType'
import FinderResults from './hubs/results/finder'
import SearchResults from './hubs/results/search'
import Detail from './hubs/detail'
import Search from './hubs/search'
import ConmetLinks from './links'

//PARTS
import PartsSearch from './parts/search'
import PartsResults from './parts/results'
// import PartsHelp from './parts/help'
// import PartsHelpDetail from './parts/help-detail'

import DrawerContainer from './ui/drawer'
import AssemblyHelp from './hubs/help'
import AssemblyHelpRead from './hubs/help/read'
import Error from './error'
import styles from '../styles'

class Scenes extends Component {
    render() {
        let backTitle = 'Back'

        const { app, goBack } = this.props
        return (
          <View style={styles.app.container}>
          <StatusBar hidden={false} barStyle='light-content'/>
          <Router sceneStyle={styles.app.container} navigationBarStyle={{backgroundColor: '#1f1f1f', borderColor: '#1a1a1a'}} titleStyle={{color: '#ffffff'}}>
            <Scene key="root" navBar={ConmetNavBar} >
                <Scene key="launch" component={Launch} title="Conmet Aftermarket" initial={true} hideNavBar={true}/>
                <Scene key="app" component={App} title="" hideNavBar={true}></Scene>
                <Scene key="hubs" component={Hubs} title="" hideNavBar={false} replace={true} backTitle='Home' />
                <Scene key="assemblySearch" component={Search} title="" hideNavBar={false} replace={true} backTitle={backTitle}/>
                <Scene key="truckType" component={TruckType} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="truckMake" component={TruckMake} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="axle" component={Axle} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
								<Scene key="mountingSystem" component={MountingSystem} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="gawr" component={GAWR} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="stud" component={Stud} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="wheelType" component={WheelType} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="material" component={Material} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="hubType" component={HubType} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="finderResults" component={FinderResults} title="" hideNavBar={false} replace={true} hubBack={true} backTitle={backTitle}/>
                <Scene key="searchResults" component={SearchResults} title="" hideNavBar={false} replace={true} hubBack={false} backTitle={backTitle}/>
                <Scene key="detail" component={Detail} title="" hideNavBar={false} replace={true} backTitle={backTitle} />
                <Scene key="conmetLinks" component={ConmetLinks} title="" hideNavBar={false} replace={true} backTitle={backTitle} />
                <Scene key="assemblyHelp" component={AssemblyHelp}  hideNavBar={false} replace={true} backTitle={backTitle} />
                <Scene key="assemblyHelpRead" component={AssemblyHelpRead}  hideNavBar={false} replace={true} backTitle={backTitle} />

                <Scene key="partsSearch" component={PartsSearch} title="" hideNavBar={false} replace={true} backTitle={backTitle}/>
                <Scene key="partsSearchResults" component={PartsResults} title="" hideNavBar={false} replace={true} backTitle={backTitle}/>
                <Scene key="error" component={Error}  hideNavBar={true} replace={true} />
          </Scene>
        </Router>

        </View>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
