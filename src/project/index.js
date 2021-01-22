import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ExportScreen from '../project/calculator/index';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <ExportScreen />
    </NavigationContainer>
  );
};

export default AppContainer;