//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Component
import NavBar from '@components/navBar'
import AuthInput from '@components/AuthInput'
import Button from '@components/Button'

import { navigatorStyle } from '@global/pageStyle'

import styles from './styles'
import I18n from '@language'
import * as THEME from '@theme'

const iMail = require('@assets/images/common/mail.png')
// create a component
class forgotScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rememberPass: false,
    }
  }

  renderTopPart = () => {
    return (
      <View style={styles.topPart}>
        <View style={{ flex: 257 }}>
        </View>
        <View style={{ flex: 566 }}>
          <View style={{ flex: 254 }}>
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

  renderMainPart = () => {
    return <View style={styles.mainPart} >
      <View style={{ flex: 4 }}>
        <KeyboardAwareScrollView style={{width: '100%'}}>
        <AuthInput style={{ width: '80%', marginTop: 20 }} image={iMail} placeholder={I18n.t('FORGOT_SCREEN_EMAIL')}
          textStyle={[]}
          onRefs={c => this.username = c}
          imageStyle={{ tintColor: 'white' }}
          onNext={() => { }}
        />
        </KeyboardAwareScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={[THEME.COMMON.button]}
          color={'#f4a41a'}
          textStyle={{ color: 'white' }} title={I18n.t('FORGOT_SCREEN_SEND')}
          onPress={() => { }}
        />
      </View>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopPart()}
        <NavBar title={I18n.t('FORGOT_SCREEN_TITLE')} onBack={() => this.onBack()} />
        {this.renderMainPart()}
      </View>
    );
  }

  onBack = () => {
    this.props.navigator.pop()
  }
}

forgotScreen.navigatorStyle = navigatorStyle

//make this component available to the app
export default forgotScreen;
  