import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './styles';
import profileImg from '../../assets/campeao.jpg';
import bell from '../../assets/Bell.png';
import marker from '../../assets/NotificationMarker.png';
import arrow from '../../assets/arrow.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../perfil';
import Faq from '../faq';
import Map from '../mapa';

export default function Home() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  function navigateToPerfil({ navigation }) {
    return <Perfil />;
  }

  function navigateToFaq({ navigation }) {
    return <Faq />;
  }

  function navigateToMap({ navigation }) {
    return <Map />;
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.icons}>
            <Image style={styles.bell} source={bell} />
            <Image style={styles.marker} source={marker} />
          </View>
          <View style={styles.presetention}>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
              <Text style={styles.name}>Ola, Campeão </Text>
              <Image style={styles.imagem} source={profileImg} />
            </TouchableOpacity>
            <View style={styles.line}></View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.title}>
            A 2ª dose da vacina estará disponível
          </Text>
          <View style={styles.mainBox}>
            <Text style={styles.mainBoxText}>
              Dia 8 de Maio até Dia 18 de Maio
            </Text>
          </View>
          <View style={styles.centersBox}>
            <Text style={styles.boxTitle}>Postos Disponíveis</Text>
            <View style={styles.box}>
              <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Text style={styles.boxText}>Meier 1</Text>
                <Image style={styles.arrow} source={arrow} />
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Meier 2</Text>
              <Image style={styles.arrow} source={arrow} />
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Meier 3</Text>
              <Image style={styles.arrow} source={arrow} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              color = focused ? 'red' : 'black';
            }
            if (route.name === 'Map') {
              iconName = 'map';
              color = focused ? 'red' : 'black';
            }
            if (route.name === 'Faq') {
              iconName ='help-circle' ;
              color = focused ? 'red' : 'black';
            }
            if (route.name === 'Perfil') {
              iconName = 'user';
              color = focused ? 'red' : 'black';
            }

            return <Feather name={iconName} size={15} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Perfil' component={navigateToPerfil} />
        <Tab.Screen name='Faq' component={navigateToFaq} />
        <Tab.Screen name='Map' component={navigateToMap} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
