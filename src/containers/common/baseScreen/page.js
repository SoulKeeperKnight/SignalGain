//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types'

// import Components
import NavBar from '@components/navBar'
import TabBar from '@components/tabBar'

import styles from './styles'
import I18n from '@language'

import { navigatorStyle } from '@global/pageStyle'

const iHome = require('@assets/images/common/tabHome.png')
const iSearch = require('@assets/images/common/tabSearch.png')
const iChart = require('@assets/images/common/tabChart.png')
const iSetting = require('@assets/images/common/tabSetting.png')

const TABS = [{
  title: I18n.t('TABBAR_HOME'),
  image: iHome
}, {
  title: I18n.t('TABBAR_SEARCH'),
  image: iSearch
}, {
  title: I18n.t('TABBAR_CHART'),
  image: iChart
}, {
  title: I18n.t('TABBAR_SETTING'),
  image: iSetting
}]

// create a component
class baseScreen extends Component {
  static defaultProps = {
    color: '#07112a',
    navBar: true,
    backButton: true,
    background: true
  }

  constructor(props) {
    super(props)

    this.props.navigator.setStyle({
      ...navigatorStyle
    })
    this.props.navigator.toggleNavBar({
      to: 'hidden',
      animated: false
    })


  }
  onBack = () => {
    this.props.navigator.pop({})
  }



  renderBackButton = () => {
    return (
      <View style={[styles.Navbar, { backgroundColor: '#07112a' }]} >
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <Text style={{ fontSize: 23, color: 'white' }}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 52 }}>
        </View>
        <View style={{ flex: 53 }}>
          <View style={{ flex: 64 }}>
          </View>
          <View style={{ flex: 48 }}>
            {
              this.props.backButton ? <TouchableOpacity onPress={() => this.onBack()}>
                <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('@assets/images/common/navBack.png')} />
              </TouchableOpacity>
                : null
            }

          </View>
          <View style={{ flex: 61 }}>
          </View>
        </View>
        <View style={{ flex: 975 }}>
        </View>
      </View>
    )
  }

  renderTabBar = () => {
    return <View style={{ flex: 180, width: '100%', flexDirection: 'row', backgroundColor: '#0d235a' }}>
      {
        TABS.map((tab, index) => {
          return <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }} key={index}>
            <TouchableOpacity onPress={() => {
              this.props.navigator.popToRoot()
              this.props.navigator.switchToTab({ tabIndex: index })
            }
            }>
              <Image style={styles.image} source={tab.image} />
              <Text style={{ color: 'white', textAlign: 'center' }}>{tab.title}</Text>
            </TouchableOpacity>
          </View>
        })
      }
    </View>
  }

  render() {
    let { navBar } = this.props
    return (
      <View style={styles.container}>
        {this.props.background ? <Image style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
          source={require('@assets/images/common/background.png')}
        /> : null}
        {
          navBar ? this.renderBackButton() : null
        }
        <View style={{ width: '100%', flex: this.props.navBar ? 1597 : 1770 }} zIndex={1}>
          {this.props.children}
        </View>
        {this.renderTabBar()}

      </View>
    );
  }
}

baseScreen.propTypes = {
  title: PropTypes.string,
  navBar: PropTypes.bool,
  color: PropTypes.string,
  backButton: PropTypes.bool,
  background: PropTypes.bool
}
//make this component available to the app
export default baseScreen;
