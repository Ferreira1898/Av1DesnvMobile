import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo3.png';
import api from '../../services/api';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginComponent from '../../components/loginComponent/loginComponent.js';
import { faqModel } from '../../data/user/userModel.js';

export default function Login() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function navigateToCadastro() {
    navigation.navigate('cadastro');
  }

  function navigateToHome({ data }) {
    navigation.navigate('home',{data:data[0]} );
  }

  function navigateToRetrieve() {
    navigation.navigate('retrieve');
  }

  async function handleSignInPress() {
    if (login.length === 0 || senha.length === 0) {
      alert('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          cellphone: login,
          password: senha,
        });

        await AsyncStorage.setItem('@CalenVac:token', response.data.token);

        getData();
      } catch (_err) {
        alert('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  }

  async function getData() {
    try {
      const response = await api.post('/users/profile', {
        cellphone: login,
      });
      const jsonValue = JSON.stringify(response.data[0])
      await AsyncStorage.setItem('@CalenVac:profile', jsonValue);
      navigateToHome(response);
    } catch (_err) {
      alert('Houve um problema com os dados, verifique suas credenciais!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.tituloLogin} >CalenVac</Text>
        </View>
        <Image style={styles.imagem} source={logoImg} />
        <Text style={styles.texto}>Login: </Text>
        <TextInput
          placeholder='Celular:'
          style={styles.textInput}
          onChangeText={(text) => setLogin(text)}
        />
        <Text style={styles.texto}>Senha: </Text>
        <TextInput
          secureTextEntry={true}
          
          placeholder='Senha'
          style={styles.textInput}
          onChangeText={(text) => setSenha(text)}
        />

        <TouchableOpacity style={styles.btnLogin} onPress={handleSignInPress}>
          <Text style={styles.textoLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToCadastro}
        >
          <Text style={styles.detailsButtonText}>Cadastre-se aqui</Text>
          <Feather name='arrow-right' size={15} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.retrieveAcessButton}
          onPress={navigateToRetrieve}
        >
          <Text style={styles.retrieveAcessText}>Recuperar acesso</Text>
          <Feather name='arrow-right' size={15} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
