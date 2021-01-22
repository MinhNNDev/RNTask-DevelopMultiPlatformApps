import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../project/calculator/index';
import ManageScreen from '../project/manage/index';

const homeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <homeStack.Navigator initialRouteName="Home">
      <homeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <homeStack.Screen
        name="Manage"
        component={ManageScreen}
        options={{headerShown: false}}
      />
    </homeStack.Navigator>
  );
};

export default HomeStackScreen;
