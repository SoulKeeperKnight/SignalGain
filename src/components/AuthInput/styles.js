import { StyleSheet } from 'react-native'
// define your styles
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    height: 60
  },
  image: {
    width: '100%',
    height:  '100%',
    marginLeft:  5,
    resizeMode: 'contain'
  },
  text: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: 17
  }
});

export default styles