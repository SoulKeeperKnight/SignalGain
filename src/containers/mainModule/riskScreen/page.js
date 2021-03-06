//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
// create a component
class riskScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willDisappear':
        return this.props.navigator.pop()
      default:
        return null
    }
  }

  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={I18n.t('RISK_SCREEN_TITLE')} navBar={true}>
        <ScrollView>
          <Text style={{ fontSize: 15, width: '90%', alignSelf: 'center', color: 'white', marginTop: 20 }}>{I18n.t('RISK_SCREEN_DESCRIPTION')}</Text>
        </ScrollView>
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default riskScreen;