import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

type ScaleFactor = 0.1 | 0.2 | 0.3 | 0.4 | 0.5

export const LayoutUtils = {
  scaleFontSize: (size: number, factor: ScaleFactor = 0.1) => moderateScale(size, factor),
  moderateVerticalScale: (size: number, factor: ScaleFactor = 0.1) => moderateVerticalScale(size, factor),
  moderateScale: (size: number, factor: ScaleFactor = 0.1) => moderateScale(size, factor)
}
