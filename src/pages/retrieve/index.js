import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Retrieve() {
  const navigation = useNavigation();
  const [cellphone, setCellphone] = useState('');

  function navigateToLogin() {
    navigation.navigate('login');
  }
  function navigateToSend() {
    navigation.navigate('send',{data:cellphone} );
  }

  async function getUserOnPress() {
    if (cellphone.length === 0) {
      alert('Preencha com seu numero de celular para continuar');
    } else {
      const response = await api.post('/users/verify', {
        cellphone: cellphone,
      });
      if (response.status === 200) {
        navigateToSend();
      }
      else{
        alert('Insira um telefone valido!');
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.tituloLogin}>Recuperar acesso:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Seu celular: </Text>
          <TextInput
            placeholder='(00) 00000-0000'
            style={styles.textInput}
            onChangeText={(text) => setCellphone(text)}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={getUserOnPress}>
          <Text style={styles.textoLogin}>Enviar SMS de recuperação</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToLogin}
        >
          <Text style={styles.detailsButtonText}>Cancelar</Text>
          <Feather name='arrow-right' size={15} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
