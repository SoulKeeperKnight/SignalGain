//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types'

import styles from './styles'

// create a component
class AuthInput extends Component {
  static defaultProps = {
    placeholder: '',
    nextType: 'next',
    isPassword: false,
    keyboardType: 'default',
    initVal: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      value: props.initVal || ''
    }

  }
  componentWillMount() {
    this.props.onRefs(this)
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ flex: 60, height: '100%' }}>
          <View style={{ flex: 46 }}>
          </View>
          <View style={{ flex: 51 }}>
            <Image source={this.props.image} style={[styles.image, this.props.imageStyle]} />
          </View>
          <View style={{ flex: 54 }}>
          </View>
        </View>
        <View style={{ flex: 60 }}>
        </View>
        <View style={{ flex: 717, height: '100%' }}>
          <View style={{ flex: 10 }}>
          </View>
          <View style={{ flex: 51 }}>
            <TextInput value={this.state.value}
              placeholderTextColor={'white'}
              onChangeText={(val) => this.setState({ value: val })}
              placeholder={this.props.placeholder}
              autoCapitalize={'none'}
              returnKeyType={this.props.nextType}
              secureTextEntry={this.props.isPassword}
              underlineColorAndroid={'transparent'}
              keyboardType={this.props.keyboardType}
              multiline={false}
              ref={(c) => { this.text = c }}
              onSubmitEditing={() => this.props.onNext()}
              style={[styles.text]}>
            </TextInput>
          </View>
          <View style={{ flex: 20 }}>
          </View>
        </View>
      </View>
    );
  }
  
  getValue = () => {
    return this.state.value
  }

  setFocus = () => {
    this.text.focus()
  }
}

AuthInput.propTypes = {
  placeholder: PropTypes.string,
  nextType: PropTypes.string,
  isPassword: PropTypes.bool,
  keyboardType: PropTypes.string,
  onNext: PropTypes.func,
  onRefs: PropTypes.func,
  initVal: PropTypes.string
}
//make this component available to the app
export default AuthInput;
