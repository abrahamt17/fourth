import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const WelcomeScreen = () => (
  <View>
    <Header title="Welcome to React Native" />
    <Text>Edit App.js to change this screen and turn it into your app.</Text>
    <Text>Press Cmd + R inside the simulator to reload your app’s code.</Text>
    <Text>Press Cmd + M or Shake your device to open the React Native Debug Menu.</Text>
    <Text>Read the docs to discover what to do next:</Text>
  </View>
);

export default WelcomeScreen;
