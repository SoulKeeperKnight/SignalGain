//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropType from 'prop-types'
import Switch from 'react-native-switch-pro'
import styles from './styles'
// create a component
class ExtraColumn extends Component {

  static defaultProps = {
    additional: 'default',
    sInitVal: true
  }

  constructor(props) {
    super(props)
    this.state = {
      switchVal: this.props.sInitVal
    }
  }

  renderSwitch() {
    return <Switch onSyncPress={val => this.setState({ switchVal: !val })} value={this.props.sInitVal} />
  }

  renderAdditions() {
    switch (this.props.additional) {
      case 'switch':
        return this.renderSwitch()
      default:
        return null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onPress ? this.props.onPress() : {}}>
          <View style={styles.mainContainer}>
            <Image source={this.props.icon} style={styles.icon} />
            <Text style={[styles.title, this.props.titleStyle, { flex: 1 }]}>{this.props.title}</Text>
            {this.renderAdditions()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

ExtraColumn.propTypes = {
  icon: PropType.number,
  title: PropType.string,
  onPress: PropType.func,
  additional: PropType.string,
  sInitVal: PropType.bool
}
//make this component available to the app
export default ExtraColumn;
