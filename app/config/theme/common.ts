import { TextStyle, ViewStyle } from 'react-native'

export const flex1: ViewStyle = { flex: 1 }
export const flexRow: ViewStyle = { display: 'flex', flexDirection: 'row' }

export const justifyCenter: ViewStyle = { justifyContent: 'center' }
export const justifyBetween: ViewStyle = { justifyContent: 'space-between' }
export const alignCenter: ViewStyle = { alignItems: 'center' }

export const textCenter: TextStyle = { textAlign: 'center' }

export const widthFull: ViewStyle = { width: '100%' }
export const widthHalf: ViewStyle = { width: '50%' }
export const heightFull: ViewStyle = { height: '100%' }
export const heightHalf: ViewStyle = { height: '50%' }

// This style allows text to wrap to the next line if it exceeds the width of the container
export const flexShrink1: TextStyle = { flexShrink: 1 }
