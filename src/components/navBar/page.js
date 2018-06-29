//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

import styles from './styles'

// create a component
class navBar extends Component {

  static defaultProps = {
    color: '#07112a'
  }

  renderBackButton = () => {
    return (
      <View style={[styles.Navbar, { backgroundColor: this.props.color, zIndex: 1000 }]} zIndex={1000}>
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <Text style={{ fontSize: 23, color: 'white' }}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 52 }}>
        </View>
        <View style={{ flex: 53 }}>
          <View style={{ flex: 64 }}>
          </View>
          <View style={{ flex: 48 }}>
            <TouchableOpacity onPress={() => this.props.onBack()}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('@assets/images/common/navBack.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 61 }}>
          </View>
        </View>
        <View style={{ flex: 975 }}>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderBackButton()}
        <View style={styles.Other} zIndex={1}>
        </View>
      </View>
    );
  }
}

navBar.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
  color: PropTypes.string
}
//make this component available to the app
export default navBar;