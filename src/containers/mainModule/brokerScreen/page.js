//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'
import BrokerItem from '../../../components/BrokerItem'

import styles from './styles'
import I18n from '@language'

const iOne = require('@assets/images/broker/one.png')
const iAccuindex = require('@assets/images/broker/accuindex.png')
// create a component
class brokerScreen extends Component {
  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={I18n.t('BROKER_SCREEN_TITLE')} navBar={true} backButton={false}>
        <Text style={styles.description}>{I18n.t('BROKER_SCREEN_DESCRIPTION')}</Text>
        <BrokerItem image={iOne} description={I18n.t('BROKER_ITEM_ONE_DESCRIPTION')} style={{marginTop: 30}}/>
        <BrokerItem image={iAccuindex} description={I18n.t('BROKER_ITEM_ACCUINDEX_DESCRIPTION')} style={{marginTop: 30}}/>
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default brokerScreen;
  