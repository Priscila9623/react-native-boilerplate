import * as Spacing from './spacing'

export type SpacingT = keyof typeof Spacing

export type Padding = {
  [K in SpacingT as K]: { paddingHorizontal: number; paddingVertical: number }
}

export type PaddingTop = {
  [K in SpacingT as `t_${K}`]: { paddingTop: number }
}

export type PaddingBottom = {
  [K in SpacingT as `b_${K}`]: { paddingBottom: number }
}

export type PaddingLeft = {
  [K in SpacingT as `l_${K}`]: { paddingLeft: number }
}

export type PaddingRight = {
  [K in SpacingT as `r_${K}`]: { paddingRight: number }
}

export type PaddingHorizontal = {
  [K in SpacingT as `h_${K}`]: { paddingHorizontal: number }
}

export type PaddingVertical = {
  [K in SpacingT as `v_${K}`]: { paddingVertical: number }
}

export type Margin = {
  [K in SpacingT as K]: { marginHorizontal: number; marginVertical: number }
}

export type MarginTop = {
  [K in SpacingT as `t_${K}`]: { marginTop: number }
}

export type MarginBottom = {
  [K in SpacingT as `b_${K}`]: { marginBottom: number }
}

export type MarginLeft = {
  [K in SpacingT as `l_${K}`]: { marginLeft: number }
}

export type MarginRight = {
  [K in SpacingT as `r_${K}`]: { marginRight: number }
}

export type MarginHorizontal = {
  [K in SpacingT as `h_${K}`]: { marginHorizontal: number }
}

export type MarginVertical = {
  [K in SpacingT as `v_${K}`]: { marginVertical: number }
}
