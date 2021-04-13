import React ,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Text,FlatList,View,Image,TextInput,TouchableOpacity, } from 'react-native';
import logoImg from '../../assets/image.png';
import styles from './styles';

export default function perfil(){
    const navigation= useNavigation();

    function navigateToLogin(){
       navigation.navigate('login');
    }

    function navigateToFAQ(){
        navigation.navigate('faq');
    }

    return(
        <View style={styles.container}>
             <StatusBar hidden />
             <TouchableOpacity 
            style={styles.detailsButton}
            onPress={navigateToLogin}>
               <Text style={styles.detailsButtonText}>Desligar</Text>
               <Feather name="log-out" size={16}  color="#FFF" />
            </TouchableOpacity>
             <Text style={styles.tituloPerfil}>Perfil</Text>
             <Image style={styles.imagem} source={logoImg}/>
            <View style={styles.headerPerfil}>
                <Text style={styles.textoPerfil}>Nome: Carlos</Text>
                <Text style={styles.textoPerfil}>Idade: 66 anos</Text>
                <Text style={styles.textoPerfil}>Gênero: Masculino</Text>
                <Text style={styles.textoPerfil}>Profissão: Motorista de Ônibus</Text>
            </View>
        <View style={styles.corpo}>
        <Text style={styles.textoCorpo}>Endereço: Rua Guaratingueta n°55 </Text>
                <Text style={styles.textoCorpo}>Bairro: Ramos</Text>
                <Text style={styles.textoCorpo}>Municipio: Rio de Janeiro</Text>
                <Text style={styles.textoCorpo}>Estado: Rio de Janeiro</Text>
        </View>
        <TouchableOpacity 
            style={styles.detailsFAQButton}
            onPress={navigateToFAQ}>
               <Text style={styles.detailsFAQButtonText}>FAQ?</Text>
               <Feather name="arrow-right" size={16}  color="#FFF" />
            </TouchableOpacity>


        </View>

    );

}