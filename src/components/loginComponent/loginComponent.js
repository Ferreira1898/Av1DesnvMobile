import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoginComponent(nome, senha) {
  const navigation = useNavigation();
  function navigateToHome() {
    navigation.navigate('home');
  }
  const [sucess, setsucess] = useState(false);

    async function handleSignInPress() {
    if (nome.length === 0 || senha.length === 0) {
      alert('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          email: nome,
          password: senha,
        });
        await AsyncStorage.setItem('@CalenVac:token', response.data.token);
        setsucess(true);
        navigateToHome();
      } catch (_err) {
        alert('Houve um problema com o login, verifique suas credenciais!');
        setsucess(false);
      }
    }
  }
  handleSignInPress
}

export default LoginComponent;
