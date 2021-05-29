import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { color } from 'react-native-reanimated';
import iconInfo from '../../assets/info-icon.jpeg'
import iconHelp from '../../assets/help.png'

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
              onChangeText={(text) => setNome(text)}
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
              onChangeText={(text) => setEmail(text)}
            />
            <Image style={styles.iconHelp} source={iconHelp} />
          </View>
        </View>

        <TouchableOpacity style={styles.btnCadastro} onPress={navigateToLogin}>
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
