import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

 const AppStack = createStackNavigator();

 import cadastro from './pages/cadastro';
 import login from './pages/login';
 import perfil from './pages/perfil';
 import faq from './pages/faq';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="login" component={login}/>
                <AppStack.Screen name="perfil" component={perfil}/>
                <AppStack.Screen name="cadastro" component={cadastro}/>
                <AppStack.Screen name="faq" component={faq}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
