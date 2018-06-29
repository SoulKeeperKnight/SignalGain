import { StyleSheet, Dimensions } from 'react-native'

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
    width: deviceInfo.width,
    zIndex: 1000
  },
  Other: {
    flex: 1747,
    backgroundColor: 'yellow',
    width: '0%',
    zIndex: 1
  }
});

export default styles
  