import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';
import SearchScreen from '../screens/search-screen';
import SuccessScreen from '../screens/success-screen';
import ErrorScreen from '../screens/error-screen';
import LoaderScreen from '../screens/loader-screen';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} />
      <Stack.Screen name="Loader" component={LoaderScreen} />
    </Stack.Navigator>
  );
};

export default Root;
