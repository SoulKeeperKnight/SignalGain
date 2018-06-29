import { StyleSheet } from 'react-native'
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  topPart: {
    flex: 553,
    width: '100%',
    backgroundColor: '#07112a',
    flexDirection: 'row'
  },
  mainPart: {
    flex: 1367,
    width: '100%',
    backgroundColor: '#081535'
  },
  rememberPart: {
    width: '80%',
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rememberMe: {
    height: 10
  },
});

export default styles
  