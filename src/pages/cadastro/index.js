import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { color } from 'react-native-reanimated';
import iconInfo from '../../assets/info-icon.jpeg'
import iconHelp from '../../assets/help.png'
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [genero, setGenero] = useState('');
  const [profissao, setProfissao] = useState('');
  const [telefone, setTelefone] = useState('');
  function navigateToLogin() {
    navigation.navigate('login');
  }
  async function handleSignUnPress() {
    if (nome.length === 0 || senha.length === 0) {
      alert('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/users', {
          cellphone: telefone,
          password: senha,
          name:nome,
          age:idade,
          address:endereco,
          gender:genero,
          profession:profissao
        });
        alert('Conta criada com sucesso ' +nome);
        navigateToLogin();
      } catch (_err) {
        alert('Houve um problema com o cadastro, verifique suas credenciais!');
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.textHeader}>Informações</Text>
          <Image style={styles.imgInfo} source={iconInfo} />
        </View>

        <View style={styles.registerBox}>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Nome: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setNome(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Idade: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setIdade(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Endereço: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setEndereco(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Gênero: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setGenero(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Profissão: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setProfissao(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Senha: </Text>
            <TextInput
              secureTextEntry={true}
              placeholder='Apenas 4 dígitos '
              style={styles.textInput}
              onChangeText={(text) => setSenha(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.textoH}>Celular: </Text>
            <TextInput
              placeholder='(00) 00000-0000  '
              style={styles.textInput}
              onChangeText={(text) => setTelefone(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
        </View>

        <TouchableOpacity style={styles.btnCadastro} onPress={handleSignUnPress}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToLogin}
        >
          <Text style={styles.detailsButtonText}>Já possuo cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
