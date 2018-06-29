//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

import styles from './styles'
import I18n from '@language'
// create a component
class BrokerItem extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d235a'}}>
          <Image style={styles.image} source={this.props.image}/>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{color: 'white', fontSize: 10}}>{I18n.t('BROKER_ITEM_OPEN_ACCOUNT')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 12, width: '90%'}}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

BrokerItem.propTypes = {
  image: PropTypes.number,
  description: PropTypes.string
}

//make this component available to the app
export default BrokerItem;
  