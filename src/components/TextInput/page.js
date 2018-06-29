//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import PropTypes from 'prop-types'
import moment from 'moment'
import styles from './styles'

// create a component
class InputComponent extends Component {
  static defaultProps = {
    border: true,
    numberOfLines: 1,
    autoCapitalize: 'none',
    secureTextEntry: false,
    initValue: '',
    inputType: 'default',
    placeholderTextColor: 'white',
    placeholder: '',
    keyboardType: 'default',
    datePickerMode: 'datetime'
  }
  constructor(props) {
    super(props)
    if (props.refs) props.refs(this)
    this.state = {
      value: this.props.initValue,
      dateTimePickerVisible: false
    }
  }
  render() {
    return (
      <View style={[styles.container, this.props.border ? styles.border : {}, this.props.style]}>
        {this.renderMain()}
      </View>
    );
  }

  renderDefault() {
    return <TextInput style={styles.text} underlineColorAndroid='transparent' numberOfLines={this.props.numberOfLines}
      autoCapitalize={this.props.autoCapitalize}
      value={this.state.value}
      onChangeText={val => this.setState({ value: val })}
      secureTextEntry={this.props.secureTextEntry}
      placeholder={this.props.placeholder}
      placeholderTextColor={this.props.placeholderTextColor}
      keyboardType={this.props.keyboardType}
      ref={c => this.input = c}
      onSubmitEditing={() => {
        return this.props.onNext ? this.props.onNext() : null
      }}
    />
  }

  renderTimePicker() {
    return <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }} onPress={() => {
        this.setState({
          dateTimePickerVisible: true
        })
      }}>
        <Text style={{ color: 'white', flex: 1, fontSize: 18, alignSelf: 'center' }}>
          { this.state.value == '' ? this.props.placeholder : moment(this.state.value).format('MM DD YYYY kk:mm')}
        </Text>
        <View style={styles.caret} />
      </TouchableOpacity>
      <DateTimePicker
        mode={this.props.datePickerMode}
        isVisible={this.state.dateTimePickerVisible}
        onConfirm={(val) => {
          this.setState({
            value: val.toISOString(),
            dateTimePickerVisible: false
          })
          return this.props.onNext ? this.props.onNext() : null
        }}
        onCancel={(val) => {
          this.setState({
            dateTimePickerVisible: false
          })
        }}
      />
    </View>
  }

  renderMain() {
    switch (this.props.inputType) {
      case 'datetime': return this.renderTimePicker()
      default: return this.renderDefault()
    }
  }

  getValue() {
    return this.state.value
  }

  initValue() {
    this.setState({
      value: ''
    })
  }

  setFocus() {
    this.input.focus()
  }
}

InputComponent.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  initValue: PropTypes.string,
  refs: PropTypes.func,
  border: PropTypes.bool,
  numberOfLines: PropTypes.number,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  inputType: PropTypes.string,
  keyboardType: PropTypes.string,
  datePickerMode: PropTypes.string,

  onNext: PropTypes.func
}
//make this component available to the app
export default InputComponent;