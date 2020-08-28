import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navbar from './screens/NavBar';

const App = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
