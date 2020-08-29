import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Components/Auth/Login';
import SignupScreen from '../Components/Auth/Signup';
import Home from '../Components/Home';
import Activity from '../Components/Activity';

const Public = createStackNavigator();

const PublicNavigator = () => (
  <Public.Navigator>
    <Public.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    <Public.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
  </Public.Navigator>
);
const PrivateNavigator = () => (
  <Public.Navigator>
    <Public.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Public.Screen name="Activity" component={Activity} options={{title: 'Musics'}} />
  </Public.Navigator>
);

function Navigator({userInfo}) {
  let isLoggedIn = userInfo && userInfo._id;
  return <NavigationContainer>{isLoggedIn ? <PrivateNavigator /> : <PublicNavigator />}</NavigationContainer>;
}

export default Navigator;
