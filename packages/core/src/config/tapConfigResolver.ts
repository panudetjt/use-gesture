import { commonConfigResolver } from './commonConfigResolver'

export const tapConfigResolver = {
  ...commonConfigResolver,
  // CoordinatesEngine compatibility - tap doesn't use axis locking
  axis(_value?: undefined): undefined {
    return undefined
  },
  axisThreshold(_value = 0) {
    return 0
  },
  lockDirection(_value = false) {
    return false
  },
  tapDiscrimination(value = false) {
    return value
  },
  tapTimeout(value = 300) {
    return value
  },
  longPressTimeout(value = 0) {
    return value
  },
  moveThreshold(value = 10) {
    return value
  },
  mouseOnly(value = true) {
    return value
  },
  pointerButtons(value: number | number[] | -1 = 1) {
    return value
  },
  pointerCapture(value = true) {
    return value
  }
}
