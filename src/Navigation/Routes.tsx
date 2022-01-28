import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Screen1, Screen2, Screen3, Screen4} from '../screens';

//stack creation for navigation
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
        <Stack.Screen name="Screen3" component={Screen3}></Stack.Screen>
        <Stack.Screen name="Screen4" component={Screen4}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
