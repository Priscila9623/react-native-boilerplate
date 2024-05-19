import { LayoutUtils } from '@utils/layout'

import * as Spacing from './spacing'
import {
  Margin,
  MarginBottom,
  MarginHorizontal,
  MarginLeft,
  MarginRight,
  MarginTop,
  MarginVertical,
  SpacingT
} from './types'

const generateMargins = (name: SpacingT, spacing: number) => {
  const marginHorizontal = spacing === 0 ? 0 : LayoutUtils.moderateScale(spacing)
  const marginVertical = spacing === 0 ? 0 : LayoutUtils.moderateVerticalScale(spacing)

  return {
    [`${name}`]: { marginHorizontal, marginVertical },
    [`t_${name}`]: { marginTop: marginVertical },
    [`b_${name}`]: { marginBottom: marginVertical },
    [`l_${name}`]: { marginLeft: marginHorizontal },
    [`r_${name}`]: { marginRight: marginHorizontal },
    [`h_${name}`]: { marginHorizontal },
    [`v_${name}`]: { marginVertical }
  }
}

const spacingNames = Object.keys(Spacing) as SpacingT[]
export default spacingNames.reduce((acc, name) => ({ ...acc, ...generateMargins(name, Spacing[name]) }), {}) as Margin &
  MarginTop &
  MarginBottom &
  MarginLeft &
  MarginRight &
  MarginHorizontal &
  MarginVertical
