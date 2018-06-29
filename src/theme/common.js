const DESIGN_WIDTH = 1080
const DESIGN_HEIGHT = 1920

import { Dimensions, StyleSheet } from 'react-native'

const DEVICE_INFO = Dimensions.get('window')

export function getDevicePixel(val) {
  return Math.round(val * DEVICE_INFO.width / DESIGN_WIDTH)
}

export default styles = StyleSheet.create({
  button: {
    width: getDevicePixel(353),
    height: getDevicePixel(100),
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4
  }
})