import { StyleSheet } from 'react-native'
import { getDevicePixel } from '../../global/design'
import * as THEME from '../../theme'

// define your styles
const styles = StyleSheet.create({
  container: {
  },
  TabBar: {
    justifyContent: 'center'
  },
  selectedTabStype: {
    height: getDevicePixel(106),
    backgroundColor: '#f4a41a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
  },
  unSelectedTabStyle: {
    height: getDevicePixel(106),
    backgroundColor: 'white',
    color: 'white',
  },
  tabContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: 'white',
    height: getDevicePixel(106),    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10
  }
});

export default styles