import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen6Item,
} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {TransitionSpecs} from '@react-navigation/stack';

//stack creation for navigation
const Stack = createSharedElementStackNavigator();

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
        <Stack.Screen name="Screen5" component={Screen5}></Stack.Screen>
        <Stack.Screen name="Screen6" component={Screen6}></Stack.Screen>
        <Stack.Screen
          name="Screen6Item"
          component={Screen6Item}
          sharedElements={routes => {
            return [routes.params.url];
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 700,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 300,
                },
              },
            },
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
