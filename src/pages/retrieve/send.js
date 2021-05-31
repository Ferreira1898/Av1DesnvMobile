import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Send({ route }) {
  const cellphone = route.params.data;
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  function navigateToLogin() {
    navigation.navigate('login');
  }

  function navigateToRetrieve() {
    navigation.navigate('retrieve');
  }

  async function postNewPasswordOnPress() {
    if (password === newPassword) {
      const response = await api.post('/users/change', {
        cellphone: cellphone,
        password: password,
      });
      alert('Senha trocada com sucesso!');
      navigateToLogin();
    } else {
      alert('As senhas devem ser iguais');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <Text style={styles.tituloLogin}>Defina uma nova senha:</Text>
        <View style={styles.box}>
          <Text style={styles.texto}>Nova senha: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.texto}>Confirme sua nova senha: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNewPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={postNewPasswordOnPress}
        >
          <Text style={styles.textoLogin}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToRetrieve}
        >
          <Text style={styles.detailsButtonText}>Cancelar</Text>
          <Feather name='arrow-right' size={15} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
