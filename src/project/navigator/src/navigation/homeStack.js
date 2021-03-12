import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';

const homeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <homeStack.Navigator initialRouteName="Home">
      <homeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <homeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </homeStack.Navigator>
  );
};

export default HomeStackScreen;
