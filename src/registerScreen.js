import * as SCREEN from '@global/screenName'

import welcomeScreen from '@containers/loginModule/welcomeScreen'
import startScreen from '@containers/loginModule/startPage'
import loginScreen from '@containers/loginModule/loginScreen'
import signupScreen from '@containers/loginModule/signupScreen'
import forgotScreen from '@containers/loginModule/forgotScreen'

import homeScreen from '@containers/mainModule/homeScreen'
import signalScreen from '@containers/mainModule/signalScreen'
import brokerScreen from '@containers/mainModule/brokerScreen'
import settingScreen from '@containers/mainModule/settingScreen'
import lockScreen from '@containers/mainModule/lockScreen'


import aboutScreen from '@containers/mainModule/aboutScreen'
import languageScreen from '@containers/mainModule/languageScreen'
import subscriptionScreen from '@containers/mainModule/subscriptionScreen'
import riskScreen from '@containers/mainModule/riskScreen'
import privacyScreen from '@containers/mainModule/privacyScreen'
import addSignalScreen from '@containers/mainModule/addSignalScreen'
import addEventScreen from '@containers/mainModule/addEventScreen'
import contactScreen from '@containers/mainModule/contactScreen'

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

export function registerScreens(store, Provider) {
  Navigation.registerComponent(SCREEN.WELCOME_SCREEN, () => welcomeScreen, store, Provider)
  Navigation.registerComponent(SCREEN.START_SCRENN, () => startScreen, store, Provider)
  Navigation.registerComponent(SCREEN.LOGIN_SCREEN, () => loginScreen, store, Provider)
  Navigation.registerComponent(SCREEN.SIGNUP_SCREEN, () => signupScreen, store, Provider)
  Navigation.registerComponent(SCREEN.FORGOT_SCREEN, () => forgotScreen, store, Provider)

  // Main Module
  Navigation.registerComponent(SCREEN.HOME_SCREEN, () => homeScreen, store, Provider)
  Navigation.registerComponent(SCREEN.SIGNAL_SCREEN, () => signalScreen, store, Provider)
  Navigation.registerComponent(SCREEN.BROKER_SCREEN, () => brokerScreen, store, Provider)
  Navigation.registerComponent(SCREEN.SETTING_SCREEN, () => settingScreen, store, Provider)
  Navigation.registerComponent(SCREEN.LOCK_SCREEN, () => lockScreen, store, Provider)

  Navigation.registerComponent(SCREEN.ABOUT_SCREEN, () => aboutScreen, store, Provider)
  Navigation.registerComponent(SCREEN.LANGUAGE_SCREEN, () => languageScreen, store, Provider)
  Navigation.registerComponent(SCREEN.SUBSCRIPTION_SCREEN, () => subscriptionScreen, store, Provider)
  Navigation.registerComponent(SCREEN.RISK_SCREEN, () => riskScreen, store, Provider)
  Navigation.registerComponent(SCREEN.PRIVACY_SCREEN, () => privacyScreen, store, Provider)
  Navigation.registerComponent(SCREEN.ADD_SIGNAL_SCREEN, () => addSignalScreen, store, Provider)
  Navigation.registerComponent(SCREEN.ADD_EVENT_SCREEN, () => addEventScreen, store, Provider)
  Navigation.registerComponent(SCREEN.CONTACT_US_SCREEN, () => contactScreen, store, Provider)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willDisappear: (navigator) => {
      console.log(navigator)
      // console.log(`Screen will disappear ${screen}`)
    },
    disDisappear: ({screen}) => {
      console.log(`Screen disappeared ${screen}`)
    }
  }).register()
}