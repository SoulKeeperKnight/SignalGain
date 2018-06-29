//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Component
import BaseScreen from '../../common/baseScreen'
import TextInput from '../../../components/TextInput'
import Button from '@components/Button'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
import * as THEME from '@theme'

const iArabic = require('@assets/images/language/arabic.png')
const iEnglish = require('@assets/images/language/english.png')
// create a component
class addSignalScreen extends Component {
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
      <BaseScreen navigator={this.props.navigator} title={I18n.t('ADD_SIGNAL_SCREEN_TITLE')} navBar={true} background={false}>
        {this.renderTopPart()}
        <View style={styles.mainPart}>
          <KeyboardAwareScrollView>
            <TextInput style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} placeholder={I18n.t('ADD_SIGNAL_SCREEN_ITEM')}
              refs={c => this.item = c}
              onNext={() => this.price.setFocus()}
            />
            <TextInput style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} placeholder={I18n.t('ADD_SIGNAL_SCREEN_PRICE')}
              refs={c => this.price = c}
              onNext={() => this.takeProfit.setFocus()}
            />
            <TextInput style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} placeholder={I18n.t('ADD_SIGNAL_SCREEN_TAKE_PROFIT')}
              refs={c => this.takeProfit = c}
              onNext={() => this.stopLoss.setFocus()}
            />
            <TextInput style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} placeholder={I18n.t('ADD_SIGNAL_SCREEN_STOP_LOSS')}
              refs={c => this.stopLoss = c}
            />
            <TextInput style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}
              inputType={'datetime'}
              placeholder={I18n.t('ADD_SIGNAL_SCREEN_DATE_TIME')} />
            <Button style={[THEME.COMMON.button, {alignSelf: 'center', marginTop: 30}]}
              color={'#f4a41a'}
              textStyle={{ color: 'white' }} title={I18n.t('ADD_SIGNAL_SCREEN_ADD')}
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
export default addSignalScreen;
