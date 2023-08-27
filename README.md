# React Native Keleya Project

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)]([https://github.com/coyot1904/keleya-pregnancy-app])

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [@react-native-picker/picker](https://www.npmjs.com/package/@react-native-picker/picker) 
- [@react-navigation/native-stack](https://www.npmjs.com/package/@react-navigation/native-stack) 
- [react-native-check-box](https://www.npmjs.com/package/react-native-check-box) 
- [react-native-date-picker](https://www.npmjs.com/package/react-native-date-picker) 
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context) 


## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `Assets`: Asset folder to store all images, const, etc.
  - `Components`: Folder to store any common component that you use through your app (such as a generic button)
  - `Screens`: Folder that contains all your application screens/features.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.


## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).


## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

List of Components : 
- KChekbox
- KHeader
- KStep
- KSubmit
- KTextInput

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

/Assets/Images/index.js
/Assets/Constants/colors.js

### I manage three main folders for that:

- Assets: Here you can store all the images  that you need through the app. 

- Components: This folder contains all the Components objects that you need to create a multilingual application. Create a file for each locale, inside define an object then maintain the nesting sorted by the screen that contains the text that you need and the text you want to show. As the last step, remember to create a reference inside the Localization.js file and add it to LocalizedStrings.
- Screens : Here you can define all Screens into app



## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene.

To keep the structure, extract the styles from the main file and place it in a {namefileStyles.js} do the same for the set of tests needed for each screen with the file {index.js}
