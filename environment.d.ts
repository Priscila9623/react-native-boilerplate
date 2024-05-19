declare module 'react-native-config' {
  export interface NativeConfig {
    [name: string]: string | undefined
    APPLICATION_ID: string
    BUILD_TYPE: string
    DEBUG: boolean
    IS_HERMES_ENABLED: boolean
    IS_NEW_ARCHITECTURE_ENABLED: boolean
    VERSION_CODE: number
    VERSION_NAME: string

    // Add your own custom config variables here
    EXAMPLE: string
  }

  export const Config: NativeConfig
  export default Config
}

export {}
