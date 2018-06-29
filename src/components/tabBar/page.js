//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

import styles from './styles'
import I18n from '@language'

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
class tabBar extends Component {
  constructor(props) {
    super(props)

    if (this.props.refs) {
      this.props.refs(this)
    }
  }

  render() {
    return (
      <View style={styles.container} zIndex={1}>
        <View style={{ flex: 1170, backgroundColor: 'lightblue', zIndex: 0}} zIndex={1}></View>
        {this.renderTabBar()}
      </View>
    );
  }

  renderTabBar = () => {
    return <View style={{ flex: 150, width: '100%', flexDirection: 'row', backgroundColor: '#0d235a', zIndex: 1000 }} zIndex={1000}>
      {
        TABS.map((tab, index) => {
          return <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }} key={index}>
            <TouchableOpacity onPress={() => this.props.navigator.switchToTab({tabIndex: index})}>
              <Image style={styles.image} source={tab.image} />
              <Text style={{color: 'white', textAlign: 'center'}}>{tab.title}</Text>
            </TouchableOpacity>
          </View>
        })
      }
    </View>
  }
}

tabBar.propTypes = {

}
//make this component available to the app
export default tabBar;