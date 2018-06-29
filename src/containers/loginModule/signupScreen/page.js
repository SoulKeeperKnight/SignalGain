//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, AsyncStorage , Modal, ActivityIndicator } from 'react-native';
import CheckBox from 'react-native-check-box'
import DeviceInfo from 'react-native-device-info'
// import Component
import NavBar from '@components/navBar'
import AuthInput from '@components/AuthInput'
import Button from '@components/Button'

import { navigatorStyle } from '@global/pageStyle'

import styles from './styles'
import I18n from '@language'
import * as THEME from '@theme'
import { promisify } from '../../../utils/promisify'
import * as Verify from '../../../utils/verify'
import * as SCREEN from '@global/screenName'
const iMail = require('@assets/images/common/mail.png')
const iPwd = require('@assets/images/common/password.png')
const iLocation = require('@assets/images/common/location.png')
const iPhone = require('@assets/images/common/phone.png')
const iName = require('@assets/images/common/username.png')

import * as firebase from "firebase";
// create a component
class signupScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rememberPass: false,
      loading: false
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
        <AuthInput style={{ width: '80%', marginTop: 20 }} image={iName} placeholder={I18n.t('SIGNUP_SCREEN_FULLNAME')}
          textStyle={[]}
          onRefs={c => this.username = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
        <AuthInput style={{ width: '80%', marginTop: 10 }} image={iMail} placeholder={I18n.t('SIGNUP_SCREEN_EMAIL')}
          textStyle={[]}
          onRefs={c => this.mail = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
        <AuthInput style={{ width: '80%', marginTop: 10 }} image={iPhone} placeholder={I18n.t('SIGNUP_SCREEN_PHONE')}
          textStyle={[]}
          onRefs={c => this.phone = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
        <AuthInput style={{ width: '80%', marginTop: 10 }} image={iLocation} placeholder={I18n.t('SIGNUP_SCREEN_CITY')}
          textStyle={[]}
          onRefs={c => this.location = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
        <AuthInput style={{ width: '80%', marginTop: 10 }} image={iPwd} placeholder={I18n.t('SIGNUP_SCREEN_PASSWORD')}
          textStyle={[]}
          isPassword={true}
          onRefs={c => this.userpass = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={[THEME.COMMON.button]}
          color={'#f4a41a'}
          textStyle={{ color: 'white' }} title={I18n.t('SIGNUP_SCREEN_SIGNUP')}
          onPress={() => this.onSignUp()}
        />
      </View>
    </View>
  }

  renderModal = () => {
    return (
      <Modal
          transparent={true}
          animationType={'none'}
          visible={this.state.loading}
          onRequestClose={() => {console.log('close modal')}}>
          <View style={[{flex: 1,alignItems: 'center',flexDirection: 'column',justifyContent: 'space-around',backgroundColor: '#00000040'}]}>
              <ActivityIndicator size="large" />
          </View>
        </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopPart()}
        <NavBar title={I18n.t('NAVBAR_SIGNUP')} onBack={() => this.onBack()} />
        {this.renderMainPart()}
        {this.renderModal()}
      </View>
    );
  }

  onSignUp = () => {

    this.setState({loading: true});

    let eMail = this.mail.getValue().trim()
    let payload = {
      Name: this.username.getValue().trim(),
      Password: this.userpass.getValue(),
      Email: eMail,
      PhoneNumber: this.phone.getValue().trim(),
      Country: this.location.getValue().trim(),
      uuid: DeviceInfo.getUniqueID(),
      PlayerId: this.props.Auth.PlayerId,
      RoleId: 0,
    }
    if ( Verify.eMailVerify(eMail) == false) {
      Alert.alert(I18n.t('ALERT_VERIFY_TITLE'), I18n.t('ALERT_EMAIL_VERIFY'))
      return;
    }
    //try to sing up
    try {
      let self = this;
      firebase.auth()
          .createUserWithEmailAndPassword(payload.Email, payload.Password).then((newUser) => {
            let data = JSON.stringify(payload);
              firebase.database().ref('/userProfile/'+ newUser.uid).set({
                  Name:  payload.Name,
                  Password: payload.Password,
                  Email: payload.Email,
                  PhoneNumber: payload.PhoneNumber,
                  Country: payload.Country,
                  uuid: payload.uuid,
                  PlayerId: payload.PlayerId,
                  RoleId: payload.RoleId,
              }).then((result) => {
                console.log("Account created");
                self.props.navigator.resetTo({
                  screen: SCREEN.LOGIN_SCREEN
                });
                self.setState({loading: false});
                // must add loading spinner and confirm window.
              }).catch((error) => {
                self.setState({loading: false});
              });
          }).catch((error) => {
            self.setState({loading: false});
          });
          // Navigate to the Home page, the user is auto logged in

      } catch (error) {
          console.log(error.toString())
          self.setState({loading: false});
      }
    
    promisify(this.props.authSignUp, payload)
    .then(() => {
      console.log('Sign Up Success')
    })
    .catch(e => {
      console.log('Failed Sign Up', e)
    })
  }

  onBack = () => {
    this.props.navigator.pop()
  }
}

signupScreen.navigatorStyle = navigatorStyle

//make this component available to the app
export default signupScreen;