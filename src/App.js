import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './components/api/RootNavigation';

import Dashboard from './components/Home/Home';
import Splash from './components/Splash/Splash';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [splash, setSplash] = useState(true);
  const [value, setValue] = useState('');
  console.log(value);

  async function getStorage() {
    let data = await AsyncStorage.getItem('loginLeaderApp');
    setValue(data);
  }

  useEffect(() => {
    getStorage();
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {!value ? (
          <>
            <Stack.Screen
              name="Login"
              initialRouteName="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
              component={Home}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              initialRouteName="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={Login}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
