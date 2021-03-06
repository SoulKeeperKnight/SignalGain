import { Dimensions } from 'react-native'

const WIDTH = 1080
const HEIGHT = 1920

const DEVICE_INFO = Dimensions.get('window')

export function getDevicePixel(val) {
  return Math.round(val * DEVICE_INFO.width / WIDTH )
}