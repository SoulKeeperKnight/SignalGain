import { StyleSheet } from 'react-native'
import { getDevicePixel } from '../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 0
  },
  image: {
    width: getDevicePixel(97),
    height: getDevicePixel(83),
    resizeMode: 'stretch',
    alignSelf: 'center'
  }
});

export default styles
  