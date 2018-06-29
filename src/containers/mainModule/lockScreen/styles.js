import { StyleSheet } from 'react-native'

import { getDevicePixel } from '../../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  markImage: {
    width: getDevicePixel(567),
    height: getDevicePixel(515),
    marginTop: getDevicePixel(136),
    alignSelf: 'center'
  }
});

export default styles
  