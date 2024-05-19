This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# React Native Boilerplate

This is a react native boilerplate for Android which brings pre-configurations such as:

- Folder structure.
- Alias path instead of using long paths.
- Use of custom fonts.
- Image cache.
- Svg image support.
- Environment variables for react native.
- Splash screen.

> [!IMPORTANT] 
> It's necessary to create a new file **.env** in the root for try it out environment variables

> [!TIP] 
> If you add variables to your **.env** file, remember to add its type to `environment.d.ts` to keep type safety

# Scripts

```bash
# Starts Metro, the JavaScript bundler that ships with React Native.
yarn start

# Runs in develop mode for android
yarn android

# Runs in develop mode for android
yarn ios

# It cleans android building
yarn clean

# It builds an apk file in release mode.
# APK file can be found at android\app\build\outputs\apk\release\app-release.apk
yarn build:apk

# It builds a bundle file in release mode. This file is the one required by google play
# Bundle file can be found at android\app\build\outputs\bundle\release\app-release.aab
yarn build:bundle
```

<!-- ### Upgrade app version

```cmd
npm run upgradeVersion
# or
yarn upgradeVersion
``` -->

## Splash screen settings

To custom the splash screen **image** you can change the the file in the root folder named: `logo.png` you can can change it by a `PNG` or a `SVG` file

Then to generate the images for each platform run:

```bash
yarn react-native generate-bootsplash --logo-width 150 ./logo.png
```

Check documentation for usage: [API](https://github.com/zoontek/react-native-bootsplash?tab=readme-ov-file#api)

For more customizations check: [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash?tab=readme-ov-file#setup)

# Directories

This project has the following directories by default:

- `/app`: Contains main source code.
- `/app/assets`: Contains all assets as fonts, images and icons.
- `/app/config`: Contains all configuration files.
- `/app/screens`: Contains all screens components.
- `/app/services`: Contains all services required in the project.
- `/app/ui`: Contains all the common UI components for your application.
- `/app/utils`: Contains functions used in your application, such as reusable utility functions.

> [!TIP]
> Each directory has an alias path you can call to import their files, try with: `@assets/`, `@config/`, `@services/`, `@ui/` or `@utils/`

# Fonts

To add a new font the the project

- Add your font files to `app/assets/fonts`
- Run this command: `npx react-native-asset`
- Add new font file names to `const FontFiles` from file `app/config/theme/typography.ts`.

Example:

```ts
/* 
Files on app/assets/fonts:
 - Helvetica-Regular.ttf
 - Helvetica-Medium.ttf
 - Helvetica-Bold.ttf
*/

const FontFiles = {
  normal: 'Helvetica-Regular',
  medium: 'Helvetica-Medium',
  bold: 'Helvetica-Bold'
}
```

# Default styles

This includes some util styles as

- Typography

  - align
  - color
  - h1: `30px` with font weight `bold`
  - h2: `24px` with font weight `bold`
  - h3: `20px` with font weight `bold`
  - body

    - xl: `20px`
    - lg: `18px`
    - md: `16px`
    - sm: `14px`
    - xs: `13px`
    - xxs: `11px`

    Each body size has the following suffixes: `medium` and `bold` example: **Typography.body_md_bold**

- Colors
- Margins and Paddings with the following sizes:

  - xxl: `50px`
  - xl: `40px`
  - lg: `30px`
  - md: `20px`
  - sm: `16px`
  - xs: `10px`
  - xxs: `5px`
  - xxxs: `1px`
  - zero: `0px`

  Each size has the following prefixes:

  - `v_`: vertical. Applies to `Top` and `bottom`
  - `h_`: horizontal. Applies to `Left` and `Right`
  - `t_`: top
  - `b_`: bottom
  - `l_`: left
  - `r_`: right

  In case you don't a prefix it will apply its margin or padding to the 4 sides (vertical and horizontal).

- CommonStyles
  - flex1
  - flexRow
  - justifyCenter
  - justifyBetween
  - alignCenter
  - textCenter
  - widthFull
  - widthFull
  - widthHalf
  - heightFull
  - heightHalf
  - flexShrink

## Learn more

To learn more about dependencies used in this project read:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [React navigation](https://reactnavigation.org/docs/getting-started) - react navigation.
- [Enviroment variables](https://github.com/luggit/react-native-config) - react-native-config.
- [Splash screen](https://github.com/zoontek/react-native-bootsplash) - react-native-bootsplash.
