//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'
import Button from '@components/Button'
import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
import * as THEME from '@theme'
import * as SCREEN from '../../../global/screenName'
import * as firebase from "firebase";

const iMark = require('@assets/images/home/lock-key.png')
const iBackground = require('@assets/images/home/background.png')
const ABackground = require('@assets/images/common/background.png')
// create a component
class homeScreen extends Component {
  static navigatorStyle = navigatorStyle
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.state = {
      lock: true
    }
  }

  componentDidMount () { 
    try {
      let self = this;
      AsyncStorage.getItem('user_id').then(user_id=> {
        firebase.database().ref('/userProfile/' + user_id).on('value',function(snapshot) {
          
          let user_data = snapshot.val();
          if (typeof(user_data.RoleId) == 'undefined') {
            self.setState({lock: true});
          } else {
            if (user_data.RoleId == 0) { //free user
              self.setState({lock: true});
            } else {
              self.setState({lock: false});
            }
          }
        });
      });
    } catch (error) {
        console.log("getting user_data error");
    }
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
  onSubscribibe () {

  }

  render() {
    if (!this.state.lock) {
      return (
        <BaseScreen navigator={this.props.navigator} title={I18n.t('HOME_SCREEN_TITLE')} navBar={true} backButton={false} background={false}>
          {this.renderTopPart()}
          <View visible = {false} style={styles.mainPart}>
            <Image source={iBackground} style={styles.background} />
            <View style={{ flex: 3, flexDirection: 'row', marginTop: 20 }}>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{'87%'}</Text>
                <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_SUCCESS_RATE')}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 80 }}>
                <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{'84%'}</Text>
                <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_SIGNAL_ACCURACY')}</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_DAILY')}</Text>
              <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_FREQUENCY')}</Text>
            </View>
          </View>
        </BaseScreen>
      );
    } else {
      return (
        <BaseScreen navigator={this.props.navigator} title={I18n.t('HOME_SCREEN_TITLE')} navBar={false} backButton={false} background={false}>
          <Image source={ABackground} style={styles.background} />
          <Image source={iMark} style={styles.markImage}/>
          <Text style={{fontSize: 16, color: 'white', alignSelf: 'center', textAlign: 'center', marginTop: 70, width: '90%'}}>{I18n.t('HOME_SCREEN_LOCK_TITLE')}</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button style={[THEME.COMMON.button]}
              color={'#f4a41a'}
              textStyle={{ color: 'white' }} title={I18n.t('HOME_SCREEN_LOCK_BUTTON')}
              onPress={() => this.onSubscribibe()}
            />
          </View>
        </BaseScreen>
      )
    }
  }
}

//make this component available to the app
export default homeScreen;
