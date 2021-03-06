import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackScreen from './src/navigation/homeStack';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default App;
