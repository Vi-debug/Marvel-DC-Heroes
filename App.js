import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen';


const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName ='Search' screenOptions = {{headerShown: false}}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
export default App