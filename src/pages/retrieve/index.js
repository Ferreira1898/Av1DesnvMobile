import React ,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Text,View,Image,TextInput,TouchableOpacity, } from 'react-native';
import styles from './styles';

export default function Retrieve(){
    const navigation= useNavigation();
    const [nome,setNome] = useState('');

    function navigateToLogin(){
        navigation.navigate('login');
    }
    
    return(
      <View style={styles.container} >
        <View style={styles.InnerContainer} >
              <StatusBar hidden />
            <View style={styles.header}>
              <Text style={styles.tituloLogin}>Recuperar acesso:</Text>
           </View>
            <Text style={styles.texto}>Seu login: </Text>
              <TextInput placeholder="Nome  " style={styles.textInput} onChangeText={text =>setNome(text)} />
         <TouchableOpacity style={styles.btnLogin} >
          <Text style={styles.textoLogin}>Enviar email de recuperação</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.detailsButton} onPress={navigateToLogin} >
             <Text style={styles.detailsButtonText}>Cancelar</Text>
               <Feather name="arrow-right" size={15}  color="white" />
        </TouchableOpacity>

        </View>
        </View>

       
    );
}