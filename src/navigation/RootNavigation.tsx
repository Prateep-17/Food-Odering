import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { ReduxProvider } from '../feature/Provider';
import Animation from '../screens/Animation';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
      <ReduxProvider>
       <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name="Login" component={Login}
            options={{
              headerShown: false,
          }}/>
          <Drawer.Screen name="Home" component={Home}
            options={{
              // headerShown: false,
          }}/>
          <Drawer.Screen name="Cart" component={Animation}
            options={{
              // headerShown: false,
          }}/>
       </Drawer.Navigator>
      </ReduxProvider>
    </NavigationContainer>
    )
  }
}

export default RootNavigation