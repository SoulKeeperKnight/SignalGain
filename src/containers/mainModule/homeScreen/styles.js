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
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  markImage: {
    width: getDevicePixel(396),
    height: getDevicePixel(512),
    marginTop: getDevicePixel(350),
    alignSelf: 'center'
  },
  scriButton: {
    width: getDevicePixel(353),
    height: getDevicePixel(100),
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4
  }
});

export default styles