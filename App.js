import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import SearchScreen from './src/screens/SearchScreen';


const Stack = createStackNavigator();

const App = () => (
  <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName ='Search' screenOptions = {{headerShown: false}}>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)
export default App