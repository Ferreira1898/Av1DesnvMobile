import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import cadastro from '../pages/cadastro';
import login from '../pages/login';
import Perfil from '../pages/perfil';
import Faq from '../pages/faq';
import retrieve from '../pages/retrieve';
import send from '../pages/retrieve/send.js';
import home from '../pages/home';
import Map from '../pages/mapa';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='login' component={login} />
        <AppStack.Screen name='Perfil' component={Perfil} />
        <AppStack.Screen name='cadastro' component={cadastro} />
        <AppStack.Screen name='Faq' component={Faq} />
        <AppStack.Screen name='retrieve' component={retrieve} />
        <AppStack.Screen name='send' component={send} />
        <AppStack.Screen name='home' component={home} />
        <AppStack.Screen name='Map' component={Map} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
