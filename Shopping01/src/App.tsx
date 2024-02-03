import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// importing navigations

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';

// params
export type RootStackParamList = {
  Home: undefined;
  Detail: {product: Products};
};

export default function App() {
  const stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{title: 'this is homepage'}}
        />
        <stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'This is Detail screen'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
