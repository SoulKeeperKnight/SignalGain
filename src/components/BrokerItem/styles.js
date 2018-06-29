import { StyleSheet } from 'react-native'
import { getDevicePixel } from '../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    height: getDevicePixel(354),
    width: getDevicePixel(998),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#0a1b45',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  image: {
    width: getDevicePixel(268),
    height: getDevicePixel(145),
    marginTop: 10
  },
  button: {
    width: getDevicePixel(268),
    height: getDevicePixel(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: getDevicePixel(24),
    borderColor: 'transparent',
    backgroundColor: '#f4a41a',
    marginTop: 20
  }
});

export default styles
  