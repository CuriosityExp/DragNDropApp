import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DragNDropScreen from './Screens/DragNDropScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="DragNDrop" component={DragNDropScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
