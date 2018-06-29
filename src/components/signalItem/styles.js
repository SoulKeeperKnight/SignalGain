import { StyleSheet } from 'react-native'
import { getDevicePixel } from '../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a1b45',
    width: getDevicePixel(1009),
    height: getDevicePixel(351),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginTop: 20
  },
  bottomImage: {
    width: getDevicePixel(40),
    height: getDevicePixel(40),
    resizeMode: 'stretch',
    marginRight: 2
  },
  types: {
    height: getDevicePixel(59),
    width: getDevicePixel(212),
    backgroundColor: '#0d235a',
    justifyContent: 'center',
    alignItems: 'center'
  },
  propertyImage: {
    width: getDevicePixel(96),
    height: getDevicePixel(96),
    resizeMode: 'stretch'
  }
});

export default styles