import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DragNDropScreen from './Screens/DragNDropScreen';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const ANIMATION = Platform.OS === 'android' ? 'slide_from_right' : 'flip';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            animation: ANIMATION,
          }}
        />
        <Stack.Screen
          name="DragNDrop"
          component={DragNDropScreen}
          options={{
            title: 'Nested DraxList',
            animation: ANIMATION,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
