


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CreateNewPasswordScreen from '../screens/CreateNewPasswordScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createStackNavigator();
const AuthNavigation = ({ authorization }) => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CreatePassword">
                {props => (
                    <LoginScreen {...props} authorization={authorization} />
                )}
            </Stack.Screen>
            <Stack.Screen name="Signup" component={SignUpScreen} />

            <Stack.Screen name="OTP" component={OtpScreen} />
            <Stack.Screen name="CreatePassword">
                {props => (
                    <CreateNewPasswordScreen {...props} data={'CreatePassword'} authorization={authorization} />
                )}
            </Stack.Screen>
        </Stack.Navigator>

    );
};

export default AuthNavigation;
