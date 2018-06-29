import { StyleSheet } from 'react-native'
import { getDevicePixel } from '../../global/design'
// define your styles
const styles = StyleSheet.create({
  container: {
    height: getDevicePixel(144),
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c5c5c9'
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: getDevicePixel(58),
    height: getDevicePixel(58),
    marginLeft: getDevicePixel(15),
    resizeMode: 'contain',
    tintColor: '#f4a41a'
  },
  title: {
    marginLeft: getDevicePixel(36),
    color: 'white'
  }
});

export default styles