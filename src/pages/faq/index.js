import React ,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Text,Button,View,FlatList,Image,TextInput,TouchableOpacity,Alert } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/faq.png';

export default function faq(){
    const [faq,setFaq]=useState([]);
   
    const navigation= useNavigation();

    function navigateToPerfil(){
       navigation.navigate('perfil');
    }
   
    return(
        <View style={styles.container}>
            <StatusBar hidden />
            <TouchableOpacity 
            style={styles.detailsButton}
            onPress={navigateToPerfil}>
               <Text style={styles.detailsButtonText}>Voltar</Text>
               <Feather name="arrow-right" size={16}  color="#FFF" />
            </TouchableOpacity>
            <Image style={styles.imagem} source={logoImg}/>
            <Text style={styles.tituloPerfil}>Perguntas Frequentes</Text>
            <FlatList
            data={[1]}
            //style={styles.corpoPerguntas}
            keyExtractor={faq =>String(faq)}
            showsVerticalScrollIndicator={false}
            renderItem={()=>(
            <View style={styles.corpoPerguntas}>
            <Text style={styles.title}>
                         As vacinas atuais protegem contra as novas variantes de coronavírus, como as linhagens de Manaus e do Reino Unido?
             </Text>

              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
             <Text style={styles.title}>
                        A vacina contra a Covid-19 já está disponível? Já posso me vacinar?             </Text>
              <Button
                title="Leia Mais +"
                 onPress={() =><Text>
                   Estudos recentes explicam que as novas variantes do vírus podem estar potencialmente
                    associadas ao aumento da transmissibilidade da doença e à propensão de reinfecção de indivíduos. 
                    Porém, nenhuma das mutações detectadas até o momento demonstrou relação com maior
                     gravidade ou outro aspecto diferente que pudesse comprometer a eficácia da vacina. 
                     Portanto, a imunização continua sendo a única solução para se conter a pandemia.
                 </Text>}
                        />
              <Text style={styles.title}>
                    Apenas as pessoas dos grupos prioritários serão imunizadas?           </Text>
              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Text style={styles.title}>
                        Quais são os grupos prioritários e quais critérios foram adotados para selecionar esses grupos?
             </Text>

              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Text style={styles.title}>Onde as vacinas serão aplicadas?
                                     </Text>

              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
            <Text style={styles.title}>
            Depois de vacinado, tenho que continuar usando máscara? Por quê?
             </Text>

              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
            <Text style={styles.title}>
            Há risco de infecção pela vacina?           </Text>

              <Button
                title="Leia Mais +"
                 onPress={() => Alert.alert('Simple Button pressed')}
                        />
                  
              
             </View>
           )}  />

          
      </View>

                    


              
    );
}