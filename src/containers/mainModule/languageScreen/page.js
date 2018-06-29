//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
import * as THEME from '@theme'

const iArabic = require('@assets/images/language/arabic.png')
const iEnglish = require('@assets/images/language/english.png')
// create a component
class languageScreen extends Component {
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
      <BaseScreen navigator={this.props.navigator} title={I18n.t('LANGUAGE_SCREEN_TITLE')} navBar={true} background={false}>
        { this.renderTopPart() }
        <View style={styles.mainPart}>
          <TouchableOpacity>
          <Image source={iArabic} style={[styles.language, { marginBottom: 60 }]}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={iEnglish} style={[styles.language]} />
          </TouchableOpacity>
        </View>
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default languageScreen;
