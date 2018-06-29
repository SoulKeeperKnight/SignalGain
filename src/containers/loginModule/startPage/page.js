//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import Components
import Button from '@components/Button'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import * as THEME from '@theme'
import I18n from '@language'
import * as SCREEN from '@global/screenName'
// create a component
class startPage extends Component {
  constructor(props) {
    super(props)

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
  render() {
    return (
      <View style={styles.container}>
        {this.renderTopPart()}
        <View style={styles.mainPart}>
          <View style={{ flex: 1010 }}>
            <View style={{ flex: 272 }}></View>
            <View style={{ flex: 772, alignItems: 'center' }}>
              <Text style={[THEME.FONTS.MostBig, { color: 'white' }]}>{I18n.t('START_SCREEN_WELCOME')}</Text>
              <Text style={[THEME.FONTS.Title, { color: 'white', marginTop: 15, textAlign: 'center'}]}>{`Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim ad veniam, quis nostrud exercitation ullamco`}</Text>
            </View>
          </View>
          <View style={{ flex: 357, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button style={[THEME.COMMON.button]} 
              color={'#f4a41a'}
              textStyle={{color: 'white'}} title={I18n.t('START_SCREEN_SIGNUP')}
              onPress={() => this.onNavigateSignUp()}
            />
            <Button style={[THEME.COMMON.button]} 
              color={'#f4a41a'}            
              textStyle={{color: 'white'}} title={I18n.t('START_SCREEN_LOGIN')}
              onPress={() => this.onNavigateLogin()}
            />
          </View>
        </View>
      </View>
    );
  }

  onNavigateLogin = () => {
    this.props.navigator.push({
      screen: SCREEN.LOGIN_SCREEN
    })
  }

  onNavigateSignUp = () => {
    this.props.navigator.push({
      screen: SCREEN.SIGNUP_SCREEN
    })
  }
}

startPage.navigatorStyle = navigatorStyle
//make this component available to the app
export default startPage;
