import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WearDetail from './app/wear/[id].jsx';
import HomeScreen from './app/home.jsx';
import SearchScreen from './app/search.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="WearDetail"
          component={WearDetail}
        />
        <Stack.Screen 
          name='Search'
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}