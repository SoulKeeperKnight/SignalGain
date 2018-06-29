//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'

const iMark = require('@assets/images/subscription/mark.png')
// create a component
class subscriptionScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch(event.id) {
      case 'willDisappear':
        return this.props.navigator.pop()
      default:
        return null
    }
  }
  
  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={I18n.t('SUBSCRIPTION_SCREEN_TITLE')} navBar={true}>
        <Image source={iMark} style={styles.markImage}/>
        <Text style={{fontSize: 25, color: 'white', alignSelf: 'center', marginTop: 30}}>{I18n.t('SUBSCRIPTION_SCREEN_TITLE')}</Text>
        <Text style={{fontSize: 16, color: 'white', alignSelf: 'center', textAlign: 'center', marginTop: 20, width: '90%'}}>{I18n.t('SUBSCRIPTION_SCREEN_DESCRIPTION')}</Text>
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default subscriptionScreen;