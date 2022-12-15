import 'react-native-gesture-handler';

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MobileNumberScreen from './src/screens/MobileNumberScreen';
import OtpScreen from './src/screens/OtpScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import SelectYourProductScreen from './src/screens/SelectYourProductScreen';
import EventScreen from './src/screens/EventScreen';
import RoleScreen from './src/screens/RoleScreen';
import HomeScreen from './src/screens/HomeScreen';
import QRCodeComponent from './src/screens/QRCodeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();
const AppNavigation = () => {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Number" component={MobileNumberScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Role" component={RoleScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="QRCode" component={QRCodeComponent} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="ChangePassword">
                {props => (
                    <CreateNewPasswordScreen {...props} data={'ChangePassword'} />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Product"
                component={SelectYourProductScreen}
            />
        </Stack.Navigator>

    );
};

export default AppNavigation;
