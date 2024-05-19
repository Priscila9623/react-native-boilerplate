import { LayoutUtils } from '@utils/layout'

import * as Spacing from './spacing'
import {
  Padding,
  PaddingBottom,
  PaddingHorizontal,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  PaddingVertical,
  SpacingT
} from './types'

const generatePaddings = (name: SpacingT, spacing: number) => {
  const paddingHorizontal = spacing === 0 ? 0 : LayoutUtils.moderateScale(spacing)
  const paddingVertical = spacing === 0 ? 0 : LayoutUtils.moderateVerticalScale(spacing)

  return {
    [`${name}`]: { paddingHorizontal, paddingVertical },
    [`t_${name}`]: { paddingTop: paddingVertical },
    [`b_${name}`]: { paddingBottom: paddingVertical },
    [`l_${name}`]: { paddingLeft: paddingHorizontal },
    [`r_${name}`]: { paddingRight: paddingHorizontal },
    [`h_${name}`]: { paddingHorizontal },
    [`v_${name}`]: { paddingVertical }
  }
}

const spacingNames = Object.keys(Spacing) as SpacingT[]
export default spacingNames.reduce(
  (acc, name) => ({ ...acc, ...generatePaddings(name, Spacing[name]) }),
  {}
) as Padding & PaddingTop & PaddingBottom & PaddingLeft & PaddingRight & PaddingHorizontal & PaddingVertical
