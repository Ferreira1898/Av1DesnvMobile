import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { color } from 'react-native-reanimated';
import iconInfo from '../../assets/info-icon.jpeg'

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [genero, setGenero] = useState('');
  const [profissao, setProfissao] = useState('');
  const [telefone, setTelefone] = useState('');

  function navigateToLogin() {
    navigation.navigate('login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />

        <View style={styles.header}>
          <Text style={styles.textHeader}>Informações</Text>
          <Image style={styles.imgInfo} source={iconInfo} />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.textoH}>Nome: </Text>
          <TextInput placeholder="Nome  " style={styles.textInput} onChangeText={text => setNome(text)} />
        </View>


        <Text style={styles.textoH}>Senha: </Text>
        <TextInput secureTextEntry={true} placeholder="Senha " style={styles.textInput}
          onChangeText={text => setSenha(text)} />

        < Text style={styles.textoH}>E-mail: </Text>
        <TextInput placeholder="Email  " style={styles.textInput} onChangeText={text => setEmail(text)} />

        <Text style={styles.textoH}>Gênero: </Text>
        <TextInput placeholder="Gênero  " style={styles.textInput} onChangeText={text => setGenero(text)} />

        <Text style={styles.textoH}>Profissão: </Text>
        <TextInput placeholder="Profissão " style={styles.textInput} onChangeText={text => setProfissao(text)} />

        <Text style={styles.textoH}>Telefone: </Text>
        <TextInput placeholder="Telefone  " style={styles.textInput} onChangeText={text => setTelefone(text)} />

        <Text style={styles.textoH}>Endereço: </Text>
        <TextInput placeholder="Endereço " style={styles.textInput} onChangeText={text => setEndereco(text)} />

        <TouchableOpacity style={styles.btnCadastro} onPress={navigateToLogin}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailsButton} onPress={navigateToLogin}>
          <Text style={styles.detailsButtonText}>Já possuo cadastro</Text>
          <Feather name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  );
}
