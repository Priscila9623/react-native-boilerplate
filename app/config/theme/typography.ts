import { TextStyle } from 'react-native'

import { LayoutUtils } from '@utils/layout'

import Colors from './colors'

const FontFiles = {
  normal: '',
  medium: '',
  bold: ''
}

const fontStyle = 'normal'
const letterSpacing = 0
const textTransform = 'none'

const base: TextStyle = {
  fontStyle,
  letterSpacing,
  textTransform
}

const FontSizes = {
  p11: LayoutUtils.scaleFontSize(11),
  p13: LayoutUtils.scaleFontSize(13),
  p14: LayoutUtils.scaleFontSize(14),
  p16: LayoutUtils.scaleFontSize(16),
  p18: LayoutUtils.scaleFontSize(18),
  p20: LayoutUtils.scaleFontSize(20),
  p24: LayoutUtils.scaleFontSize(24),
  p30: LayoutUtils.scaleFontSize(30),
  p32: LayoutUtils.scaleFontSize(32)
}

enum FontWeight {
  normal = '400',
  medium = '500',
  bold = '700'
}

const FontFamilies = {
  normal: {
    ...base,
    fontFamily: FontFiles.normal,
    fontWeight: FontWeight.normal,
    color: Colors.black
  },
  medium: {
    ...base,
    fontFamily: FontFiles.medium,
    fontWeight: FontWeight.medium,
    color: Colors.black
  },
  bold: {
    ...base,
    fontFamily: FontFiles.bold,
    fontWeight: FontWeight.bold,
    color: Colors.black
  }
}

const typography = {
  h1: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p30
  },
  h2: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p24
  },
  h3: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p20
  },
  body_xl: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p20
  },
  body_xl_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p20
  },
  body_xl_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p20
  },
  body_lg: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p18
  },
  body_lg_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p18
  },
  body_lg_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p18
  },
  body_md: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p16
  },
  body_md_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p16
  },
  body_md_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p16
  },
  body_sm: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p14
  },
  body_sm_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p14
  },
  body_sm_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p14
  },
  body_xs: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p13
  },
  body_xs_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p13
  },
  body_xs_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p13
  },
  body_xxs: {
    ...FontFamilies.normal,
    fontSize: FontSizes.p11
  },
  body_xxs_medium: {
    ...FontFamilies.medium,
    fontSize: FontSizes.p11
  },
  body_xxs_bold: {
    ...FontFamilies.bold,
    fontSize: FontSizes.p11
  }
}

const textColors: Record<keyof typeof Colors, { color: string }> = Object.fromEntries(
  Object.entries(Colors).map(([key, value]) => [key, { color: value }])
) as Record<keyof typeof Colors, { color: string }>

const align = {
  center: { textAlign: 'center' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' }
} as const

const exportDefault = {
  ...typography,
  color: textColors,
  align
} as const

export default exportDefault
