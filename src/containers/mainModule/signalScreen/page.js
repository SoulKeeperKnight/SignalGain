//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'
import TabSelection from '@components/TabSelection'
import SignalItem from '@components/signalItem'

import styles from './styles'
import I18n from '@language'
const Tabs = [I18n.t('SIGNAL_TAB_ACTIVE'), I18n.t('SIGNAL_TAB_HISTORY')]

// create a component
class signalScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabs: Tabs[0]
    }
  }

  componentDidMount () { 
    try {
      let json_data = AsyncStorage.getItem('user_data');
    } catch (error) {
        console.log("getting user_data error");
    }
  }

  renderItem(data) {
    return <SignalItem
      title={data.title}
      itemType={data.itemType}
      date={data.date}
      data={data.data}
    />
  }
  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={'Setting'} navBar={false}>
        <TabSelection tabs={Tabs} style={{ marginTop: 80, width: '100%' }} onTabChanged={(val) => this.setState({ activeTabs: val })} />
        { this.renderItem({
          title: 'EURUSD',
          itemType: 'BUY',
          date: new Date().toISOString(),
          data: {
            entry: 1.1015,
            takeProfit: 1.1000,
            stopLoss: 1.1050
          }
        })}
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default signalScreen;
