import React, {Animated, PixelRatio, Image, StyleSheet, Text, TouchableOpacity, View, NavigationExperimental} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../selectors'
import Icon from 'react-native-vector-icons/EvilIcons';
var menuIcon = (<Icon allowFontScaling={false} name="navicon" size={30} color="#e0e0e0" />)
var backArrow = (<Icon allowFontScaling={false} name="chevron-left" size={30} color="#e0e0e0" />)

const {
    AnimatedView: NavigationAnimatedView,
    Card: NavigationCard,
    RootContainer: NavigationRootContainer,
    Header: NavigationHeader,
    } = NavigationExperimental;

class ConmetNavBar extends React.Component {
    componentWillMount(){
        const state = this.props.navigationState;
        this._renderRightButton = this._renderRightButton.bind(this);
        this._renderBackButton = this._renderBackButton.bind(this);
        this._renderLeftButton = this._renderLeftButton.bind(this);
        this._renderTitle = this._renderTitle.bind(this);
        if (state.renderLeftButton){
            this._renderLeftButton = state.renderLeftButton;
        }
        if (state.renderRightButton){
            this._renderRightButton = state.renderRightButton;
        }
        if (state.renderBackButton){
            this._renderBackButton = state.renderBackButton;
        }
    }
    render() {
        const state = this.props.navigationState;
        const child = state.children[state.index];
        let selected = state.children[state.index];
        while (selected.hasOwnProperty('children')) {
            selected = selected.children[selected.index]
        }

        if (selected.component && selected.component.renderNavigationBar){
            return selected.component.renderNavigationBar({...this.props,...selected});
        }
        if (state.hideNavBar || child.hideNavBar || selected.hideNavBar){
            return null;
        }
        return (
            <Animated.View
                style={[styles.header, state.navigationBarStyle, selected.navigationBarStyle]}>
                {state.children.map(this._renderTitle, this)}
                {this._renderLeftButton() || this._renderBackButton()}
                {this._renderRightButton()}

            </Animated.View>
        );
    }

    _renderBackButton() {

				const { app , goBack}  = this.props;
				const state = this.props.navigationState;
        const childState = state.children[state.index];
        let buttonImage = state.backButtonImage || menuIcon;
        let onPress = Actions.pop;
        if (childState.hubBack) {
          onPress = () => goBack(app)
        }


        if (state.index === 0) {
            if (!!drawer && typeof drawer.toggle === 'function') {
                buttonImage = state.drawerImage || require('../../images/menu_burger.png');
                onPress = drawer.toggle;
            } else {
                return null;
            }
        }

        let text = childState.backTitle ? <Text allowFontScaling={false} style={[styles.barBackButtonText, childState.backButtonTextStyle]}>
            {childState.backTitle}
        </Text> : null;

        return (
            <TouchableOpacity style={[styles.backButton, state.leftButtonStyle]} onPress={onPress}>
                {backArrow}
                {text}
            </TouchableOpacity>
        );
    }

    _renderRightButton() {
        return (
          <TouchableOpacity style={[styles.rightButton, styles.rightButtonStyle]}
                            onPress={()=> Actions.conmetLinks()}>
              <Text allowFontScaling={false} style={[styles.barRightButtonText, styles.rightButtonTextStyle]}>{menuIcon}</Text>
          </TouchableOpacity>)
    }

    _renderLeftButton() {
        function tryRender(state) {
            if (state.onLeft && state.leftTitle){
                return (
                    <TouchableOpacity style={[styles.leftButton, state.leftButtonStyle]} onPress={state.onLeft.bind(null, state)}>
                        <Text allowFontScaling={false} style={[styles.barLeftButtonText, state.leftButtonTextStyle]}>{state.leftTitle}</Text>
                    </TouchableOpacity>
                );
            }
            // if ((!!state.onLeft ^ !!state.leftTitle)) {
            //     console.warn('Both onLeft and leftTitle must be specified for the scene: ' + state.name)
            // }
        }
        const state = this.props.navigationState;
        return tryRender(state) || tryRender(state.children[state.index]);
    }

    _renderTitle(childState: NavigationState, index:number) {
        return (
            <Animated.Text
                key={childState.key}
                style={[
          styles.title, this.props.navigationState.titleStyle, childState.titleStyle,
          {
            opacity: this.props.position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 1, 0],
            }),
            left: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [200, -200],
            }),
            right: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [-200, 200],
            }),
          },
        ]}>
                {this.props.getTitle ? this.props.getTitle(childState) : childState.title }
            </Animated.Text>
        );
    }

}


ConmetNavBar.contextTypes = {
  drawer: React.PropTypes.object
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500',
        color: '#0A0A0A',
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
    },
    header: {
        backgroundColor: '#EFEFF2',
        paddingTop: 20,
        top: 0,
        height: 64,
        right: 0,
        left: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#1a1a1a',
        position: 'absolute',
    },
    backButton: {
        width: 130,
        height: 37,
        position: 'absolute',
        bottom: 4,
        left: 2,
        padding: 8,
        flexDirection: 'row',
    },
    rightButton: {
        width: 100,
        height: 37,
        position: 'absolute',
        bottom: 4,
        right: 2,
        padding: 8,
    },
    leftButton: {
        width: 100,
        height: 37,
        position: 'absolute',
        bottom: 4,
        left: 2,
        padding: 8,
    },
    barRightButtonText: {
        color: 'rgba(255, 255, 255, .6)',
        textAlign: 'right',
        fontSize: 17,
    },
    barBackButtonText: {
        color: 'rgba(255, 255, 255, .6)',
        textAlign: 'left',
        fontSize: 17,
        paddingLeft: 0,
    },
    barLeftButtonText: {
        color: 'rgb(0, 122, 255)',
        textAlign: 'left',
        fontSize: 17,
    },
    backButtonImage: {
        width: 13,
        height: 21,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ConmetNavBar)
