//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Component
import BaseScreen from '../../common/baseScreen'
import AuthInput from '@components/AuthInput'

import Button from '@components/Button'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
import * as THEME from '@theme'

const iName = require('@assets/images/common/username.png')
const iMail = require('@assets/images/common/mail.png')
const iPhone = require('@assets/images/common/phone.png')
const iMessage = require('@assets/images/common/mail.png')
// create a component
class contactScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willDisappear':
        return this.props.navigator.pop()
      default:
        return null
    }
  }

  renderTopPart = () => {
    return (
      <View style={styles.topPart}>
        <View style={{ flex: 257 }}>
        </View>
        <View style={{ flex: 566 }}>
          <View style={{ flex: 129 }}>
          </View>
          <View style={{ flex: 170 }}>
            <Image source={require('@assets/images/common/mark.png')} style={THEME.STYLES.image} />
          </View>
          <View style={{ flex: 129 }}>
          </View>
        </View>
        <View style={{ flex: 257 }}>
        </View>
      </View>
    )
  }

  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={I18n.t('CONTACT_US_SCREEN_TITLE')} navBar={true} background={false}>
        {this.renderTopPart()}
        <View style={styles.mainPart}>
          <KeyboardAwareScrollView style={{width: '100%'}}>
            <AuthInput style={{ width: '90%', marginTop: 20 }} image={iName} placeholder={I18n.t('CONTACT_US_SCREEN_FULL_NAME')}
              textStyle={[]}
              onRefs={c => this.username = c}
              imageStyle={{ tintColor: '#f4a41a' }}
              onNext={() => { }}
            />
            <AuthInput style={{ width: '90%', marginTop: 20 }} image={iMail} placeholder={I18n.t('CONTACT_US_SCREEN_EMAIL')}
              textStyle={[]}
              onRefs={c => this.username = c}
              imageStyle={{ tintColor: '#f4a41a' }}
              onNext={() => { }}
            />
            <AuthInput style={{ width: '90%', marginTop: 20 }} image={iPhone} placeholder={I18n.t('CONTACT_US_SCREEN_PHONE')}
              textStyle={[]}
              onRefs={c => this.username = c}
              imageStyle={{ tintColor: '#f4a41a' }}
              onNext={() => { }}
            />
            <AuthInput style={{ width: '90%', marginTop: 20 }} image={iMessage} placeholder={I18n.t('CONTACT_US_SCREEN_MESSAGE')}
              textStyle={[]}
              onRefs={c => this.username = c}
              imageStyle={{ tintColor: '#f4a41a' }}
              onNext={() => { }}
            />
            <Button style={[THEME.COMMON.button, { alignSelf: 'center', marginTop: 30 }]}
              color={'#f4a41a'}
              textStyle={{ color: 'white' }} title={I18n.t('CONTACT_US_SCREEN_SEND')}
              onPress={() => this.onAdd()}
            />
          </KeyboardAwareScrollView>
        </View>
      </BaseScreen>
    );
  }

  onAdd = () => {

  }
}

//make this component available to the app
export default contactScreen;
