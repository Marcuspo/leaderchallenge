import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './components/Dashboard/Dashboard';
import Splash from './components/Splash/Splash';
import Login from './components/Login/Login';

const Stack = createStackNavigator();

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          initialRouteName="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
