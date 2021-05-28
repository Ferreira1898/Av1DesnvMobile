import React ,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Text,View,Image,TextInput,TouchableOpacity, } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo1.png';

export default function Login(){
    const navigation= useNavigation();
    const [nome,setNome] = useState('');
    const[senha,setSenha] = useState('');

    function navigateToCadastro(){
        navigation.navigate('cadastro');
    }
    
    function navigateToPerfil(){
      navigation.navigate('perfil');
  }
    
    return(
        <View style={styles.container} >
              <StatusBar hidden />
            <View style={styles.header}>
              <Text style={styles.tituloLogin}>CalenVac</Text>
           </View>
           <Image style={styles.imagem} source={logoImg}/>
            <Text style={styles.texto}>Login: </Text>
              <TextInput placeholder="Nome  " style={styles.textInput} onChangeText={text =>setNome(text)} />
            <Text style={styles.texto}>Senha: </Text>
              <TextInput placeholder="Senha  " style={styles.textInput} onChangeText={text =>setNome(text)} />

         <TouchableOpacity style={styles.btnLogin} onPress={navigateToPerfil}>
          <Text style={styles.textoLogin}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.detailsButton} onPress={navigateToCadastro}>
             <Text style={styles.detailsButtonText}>Cadastre-se aqui</Text>
               <Feather name="arrow-right" size={15}  color="white" />
        </TouchableOpacity>

        </View>

       
    );
}