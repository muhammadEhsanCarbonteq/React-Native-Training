/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/components/screens/SplashScreen';
import AllNavigation from './src/navigations/index'

const App = () => {
  const [authorized, setAuthorized] = useState(false)
  const authorization = (value) => {
    setAuthorized(value)
  }
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AllNavigation authorized={authorized} authorization={authorization} />
    </NavigationContainer>
  );
};

export default App;
