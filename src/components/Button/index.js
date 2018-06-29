//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles'
// create a component
class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity 
        style={[styles.container, this.props.style, {backgroundColor: this.props.color}]} 
        onPress={() => this.props.onPress()}>
        <Text style={[this.props.textStyle, {backgroundColor: 'transparent'}]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
}
//make this component available to the app
export default Button;
