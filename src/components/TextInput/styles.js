import { StyleSheet } from 'react-native'

import { getDevicePixel } from '../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    height: getDevicePixel(147)
  },
  border: {
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  text: {
    fontSize: 18,
    color: 'white',
    height: '100%'
  },
  caret: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: 'white'
  }
});

export default styles