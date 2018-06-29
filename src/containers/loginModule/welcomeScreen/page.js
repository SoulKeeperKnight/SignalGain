//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import OneSignal from 'react-native-onesignal'

import Swiper from 'react-native-swiper';
import styles from './styles'
import I18n from '../../../language'

import * as SCREEN from '@global/screenName'

// create a component
class welcomeScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      swiperPage: 0
    }
  }

  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds.bind(this))
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onIds(device) {
    this.props.authPlayerId(device.userId)
  }

  renderDots = (total, index) => {
    let dots = []
    for (var i = 0; i < total; i++) {
      if (i == index) {
        dots.push(
          <TouchableOpacity>
            <View style={{ width: 16, height: 16, borderWidth: 1, borderRadius: 8, borderColor: 'transparent', backgroundColor: '#f4a41a' }}>
            </View>
          </TouchableOpacity>
        )
      } else {
        dots.push(
        <TouchableOpacity>
          <View style={{ width: 16, height: 16, borderWidth: 1, borderRadius: 8, borderColor: 'transparent', backgroundColor: '#535c72' }}>
          </View>
        </TouchableOpacity>)
      }
    }
    return dots
  }

  renderPagination = (index, total, context) => {
    let dots = this.renderDots(total, index)
    // this.setState({swiperPage: index})
    return (
      <View style={{ position: 'absolute', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        bottom: 0, 
        marginBottom: 50, 
        paddingLeft: 50,
        paddingRight: 50,
        width: '100%' }}>
        <View style={{flexDirection: 'row'}}>
          {
            dots.map((item, index) => <View key={index} style={{marginRight: 10}}>{item}</View>)
          }
        </View>
        <View>
          {
            index != total - 1 ?
              <TouchableOpacity onPress={() => this.gotoNext(index)}>
                <View style={{width: 30, height: 30, borderWidth: 1, borderColor: 'white', borderRadius: 15, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>{'>'}</Text>
                </View>
              </TouchableOpacity>
              : <TouchableOpacity onPress={() => this.onStart()}>
                <View style={{width: 80, height: 30, borderWidth: 1, borderRadius:5, borderColor: 'transparent', backgroundColor: '#f4a41a', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>{I18n.t('WELCOME_SCREEN_START')}</Text>
                </View>
                </TouchableOpacity>
          }
        </View>
      </View>
    )
  }

  render() {
    return (
      <Swiper style={styles.wrapper}
        showsButtons={true} onScroll={() => { }} loop={false} showsButtons={false}
        refs={(c) => this.swiper = c }
        renderPagination={(i, t, c) => this.renderPagination(i, t, c)}>
        <View style={styles.slide1}>
          <Image source={require('@assets/images/welcome/welcome1.png')} style={styles.slide} />
        </View>
        <View style={styles.slide2}>
        <Image source={require('@assets/images/welcome/welcome2.png')} style={styles.slide} />
        </View>
        <View style={styles.slide3}>
          <Image source={require('@assets/images/welcome/welcome3.png')} style={styles.slide} />
        </View>
      </Swiper>
    );
  }

  gotoNext = (i) => {
    this.swiper.scrollTo(1)
  }

  onStart = () => {
    this.props.navigator.push({
      screen: SCREEN.START_SCRENN
    })
  }
}

//make this component available to the app
export default welcomeScreen;
