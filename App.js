import { Provider } from 'react-redux'
import { store } from './src/reducer'
import * as appTYPE  from './src/reducer/modules/app/actionType'
import { appActionCreators } from './src/reducer/modules/app/actions'
import { Navigation } from 'react-native-navigation'

import { registerScreens, registerScreenVisibilityListener } from './src/registerScreen'
import * as SCREEN from './src/global/screenName'
import { promisify } from './src/utils'
import { compose } from 'recompose'
import { call, put, take } from 'redux-saga/effects'
import * as THEME from './src/theme'
import I18n from '@language'
import { navigatorStyle } from '@global/pageStyle'
import * as firebase from "firebase";



registerScreens(store, Provider)
registerScreenVisibilityListener()
export default class App {
  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this))
    store.dispatch({
      type: appTYPE.APP_INITAIALIZED
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCKc-5JPBLacWGUXxkpd5xfbvLyQ-YVL_U",
      authDomain: "chartgain-1e84d.firebaseapp.com",
      databaseURL: "https://chartgain-1e84d.firebaseio.com",
      projectId: "chartgain-1e84d",
      storageBucket: "chartgain-1e84d.appspot.com",
      messagingSenderId: "1056646207033"
    });
  }

  onStoreUpdate() {
    const { root } = store.getState().app
    if ( this.currentRoot != root ) {
      this.currentRoot = root
      this.startApp(root)
    }
  }

  startApp(root) {
    switch(root) {
      case 'login':
        return this.startLoginApp()
      case 'main':
        return this.startMainApp()
    }
  }
  startLoginApp () {
    Navigation.startSingleScreenApp({
      screen: {
        screen: SCREEN.WELCOME_SCREEN,
        title: 'Welcome',
        navigatorStyle: {
          navBarHidden: true,
          statusBarHidden: true
        }
      }
    })
  }

  startMainApp () {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: SCREEN.HOME_SCREEN,
          label: I18n.t('TABBAR_HOME'),
          title: I18n.t('TABBAR_HOME'),
          navigatorStyle: navigatorStyle
        },
        {
          screen: SCREEN.SIGNAL_SCREEN,
          label: I18n.t('TABBAR_SEARCH'),
          title: I18n.t('TABBAR_SEARCH'),
          navigatorStyle: navigatorStyle          
        },
        {
          screen: SCREEN.BROKER_SCREEN,
          label: I18n.t('TABBAR_CHART'),
          title: I18n.t('TABBAR_CHART'),
          navigatorStyle: navigatorStyle          
        },
        {
          screen: SCREEN.SETTING_SCREEN,
          label: I18n.t('TABBAR_SETTING'),
          title: I18n.t('TABBAR_SETTING'),
          navigatorStyle: navigatorStyle          
        }
      ],
      tabsStyle: {
        tabBarBackgroundColor: 'transparent',
        tabBarButtonColor: 'white',
      },
      appStyle: {
        // tabBarBackgroundColor: THEME.COLOR.COLOR_TABBAR,
        keepStyleAcrossPush: true
      }
    })
  }
}
