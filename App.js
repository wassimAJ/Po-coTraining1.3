import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from './src/context/BlogContext';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
       <Provider>
      <Navigation/>
    </Provider>
    </NavigationContainer>
   
  );
}