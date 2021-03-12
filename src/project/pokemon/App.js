import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Pokemon from './src/component/login';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Pokemon />
    </NavigationContainer>
  );
};

export default AppContainer;
