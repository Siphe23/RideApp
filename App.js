import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'omeScreen;
import MyDriversScreen from './screens/MyDriversScreen';
import SetPickupScreen from './screens/SetPickupScreen';
import YourDriverScreen from './screens/YourDriverScreen';
import SafetyPreferencesScreen from './screens/SafetyPreferencesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={H} />
        <Stack.Screen name="MyDrivers" component={MyDriversScreen} />
        <Stack.Screen name="SetPickup" component={SetPickupScreen} />
        <Stack.Screen name="YourDriver" component={YourDriverScreen} />
        <Stack.Screen name="SafetyPreferences" component={SafetyPreferencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}