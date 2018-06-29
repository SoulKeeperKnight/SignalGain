import { StyleSheet, Dimensions } from 'react-native'
import { getDevicePixel } from '../../../global/design'

const deviceInfo = Dimensions.get('window')
// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  Navbar: {
    flex: 173,
    flexDirection: 'row',
    width: '100%'
  },
  Other: {
    flex: 1747,
    backgroundColor: 'yellow',
    width: '0%',
    zIndex: 1
  },
  image: {
    width: getDevicePixel(97),
    height: getDevicePixel(83),
    resizeMode: 'stretch',
    alignSelf: 'center'
  }
});

export default styles
  