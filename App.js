/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/components/screens/SplashScreen';
import LoginScreenContainer from './src/containers/LoginScreenContainer';
import MobileNumberScreenContainer from './src/containers/MobileNumberScreenContainer';
import OtpScreenContainer from './src/containers/OtpScreenContainer';
import SignUpScreenContainer from './src/containers/SignUpScreenContainer';
import CreateNewPasswordContainer from './src/containers/CreateNewPasswordContainer';
import SelectYourProductScreenContainer from './src/containers/SelectYourProductScreenContainer';
import EventScreenContainer from './src/containers/EventScreenContainer';
import RoleScreenContainer from './src/containers/RoleScreenContainer';
import HomeScreenContainer from './src/containers/HomeScreenContainer';
import QRCodeScreenContainer from './src/containers/QRCodeScreenContainer';
import DetailScreenContainer from './src/containers/DetailScreenContainer';

const Stack = createStackNavigator();
const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {splash ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreenContainer} />
          <Stack.Screen name="Number" component={MobileNumberScreenContainer} />
          <Stack.Screen name="OTP" component={OtpScreenContainer} />
          <Stack.Screen name="Signup" component={SignUpScreenContainer} />
          <Stack.Screen name="Event" component={EventScreenContainer} />
          <Stack.Screen name="Role" component={RoleScreenContainer} />
          <Stack.Screen name="Home" component={HomeScreenContainer} />
          <Stack.Screen name="QRCode" component={QRCodeScreenContainer} />
          <Stack.Screen name="Details" component={DetailScreenContainer} />
          <Stack.Screen name="CreatePassword">
            {props => (
              <CreateNewPasswordContainer {...props} data={'CreatePassword'} />
            )}
          </Stack.Screen>
          <Stack.Screen name="ChangePassword">
            {props => (
              <CreateNewPasswordContainer {...props} data={'ChangePassword'} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Product"
            component={SelectYourProductScreenContainer}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
