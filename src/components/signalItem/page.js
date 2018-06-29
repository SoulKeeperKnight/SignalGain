//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './styles'
import I18n from '@language'
const iTimer = require('@assets/images/signal/timer.png')
const iRelease = require('@assets/images/signal/release.png')

const iEntry = require('@assets/images/signal/entry.png')
const iProfit = require('@assets/images/signal/profit.png')
const iStop = require('@assets/images/signal/stop.png')
// create a component
class signalItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemColor: this.props.itemType == I18n.t('SIGNAL_ITEM_SELL') ? '#ed1c24' : '#13c800'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={{ flex: 1 ,  alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={{ fontSize: 19, color: 'white', marginTop: 10 }}>{this.props.title}</Text>
            <View style={styles.types}>
              <Text style={{ color: this.state.itemColor, fontSize: 16 }}>{this.props.itemType}</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.propertyImage} source={iEntry} />
              <Text style={{color: 'white', marginTop: 1}}>{I18n.t('SIGNAL_ITEM_ENTRY')}</Text>
              <Text style={{color: 'white'}}>{this.props.data.entry}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.propertyImage} source={iProfit} />
              <Text style={{color: 'white', marginTop: 1}}>{I18n.t('SIGNAL_ITEM_TAKE_PROFIT')}</Text>
              <Text style={{color: 'white'}}>{this.props.data.takeProfit}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.propertyImage} source={iStop} />
              <Text style={{color: 'white', marginTop: 1}}>{I18n.t('SIGNAL_ITEM_STOP_LOSS')}</Text>
              <Text style={{color: 'white'}}>{this.props.data.stopLoss}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' , flex: 1}}>
            <Image style={styles.bottomImage} source={iTimer} />
            <Text style={{color: 'white', fontSize: 11}}>{I18n.t('SIGNAL_ITEM_DATE')} {':'} {moment(this.props.date).format('DD-MMM-YYYY')}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Image style={styles.bottomImage} source={iRelease} />
            <Text style={{color: 'white', fontSize: 11}}>{I18n.t('SIGNAL_ITEM_RELEASE')} {':'}{moment(this.props.date).fromNow()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

signalItem.propTypes = {
  title: PropTypes.string,
  itemType: PropTypes.string,
  date: PropTypes.string,
  data: PropTypes.shape({
    entry: PropTypes.number,
    takeProfit: PropTypes.number,
    stopLoss: PropTypes.number
  })
}
//make this component available to the app
export default signalItem;
