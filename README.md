# React Native Boilerplate

This is a react native boilerplate for Android which brings pre-configurations such as:

* Folder structure.
* Alias path instead of using long paths.
* Use of custom fonts.
* Image cache.
* Svg image support.
* React navigation config in it´s 5 version.
* Enviroment variables for react native.
* Redux config.

> **Note:** Is necessary to create a new file __.env__ in the root for try it out enviroment variables, for help checkout the .env.example file

## Run boilerplate

Try it out the project like:

```cmd
npm run android
# or
yarn android
```
## Commands

Here some helpful commands:

### Clean build project

```cmd
npm run clean
# or
yarn clean
```

### Upgrade app version

```cmd
npm run upgradeVersion
# or
yarn upgradeVersion
```

## Splash screen settings
To custom the splash screen **image** you can change it in the next path
> android\app\src\main\res\drawable\logo.png


To custom the splash screen **background color** edit the next file
> android\app\src\main\res\layout\launch_screen.xml

Then edit this line by adding your favorite color
```android:background="#34495e"```

## Learn more

To learn more about dependencies used in this project read: 

* [React navigation](https://reactnavigation.org/docs/getting-started) - react navigation.
* [Enviroment variables](https://github.com/luggit/react-native-config) - react-native-config.
* [Splash screen](https://github.com/crazycodeboy/react-native-splash-screen) - react-native-splash-screen.