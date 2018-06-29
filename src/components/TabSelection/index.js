//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs'
import PropType from 'prop-types'

import styles from './styles'
// create a component
class TabSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: this.props.tabs.length ? this.props.tabs[0] : ''
    }
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Tabs selected={this.state.page}
          style={styles.TabBar}
          iconStyle={{flex: undefined}}
          selectedStyle={styles.selectedTabStype} onSelect={el=> {
          this.setState({page:el.props.name})
          this.props.onTabChanged(el.props.name)
          }}>
          {
            this.props.tabs && this.props.tabs.map((item, index) => {
              return (
                <View style={styles.tabContainer} key = {index} name={item}>
                  <Text style={[{fontSize: 15},
                  { color: this.state.page == item ? 'white' : '#081535',
                    backgroundColor: 'transparent'
                   }
                  ]}
                  >{item}</Text>
                </View>
              )
            })
          }
        </Tabs>
      </View>
    );
  }
}

TabSelection.propTypes = {
  tabs: PropType.arrayOf(PropType.string),
  onTabChanged: PropType.func
}

//make this component available to the app
export default TabSelection;
