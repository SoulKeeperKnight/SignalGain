import { StyleSheet } from 'react-native'
import { getDevicePixel } from '@global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  topPart: {
    flex: 387,
    width: '100%',
    backgroundColor: '#07112a',
    flexDirection: 'row'
  },
  mainPart: {
    flex: 1367,
    width: '100%',
    backgroundColor: '#081535',
    justifyContent: 'center',
    alignItems: 'center'
  },
  language: {
    width: getDevicePixel(344),
    height: getDevicePixel(235),
    resizeMode: 'contain'
  }
});

export default styles
  