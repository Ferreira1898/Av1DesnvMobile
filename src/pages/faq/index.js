import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/faq.png';
import addImg from '../../assets/add.png';
import { faqModel } from '../../data/faq/faqModel.js';
import { detailsOptions } from '../../components/detailOptions/detailOptions.js';

export function Faq() {
  const [faq, setFaq] = useState([]);
  const [state, setState] = useState([false]);
  const [state1, setState1] = useState([false]);
  const [state2, setState2] = useState([false]);

  const navigation = useNavigation();

  function navigateToPerfil() {
    navigation.navigate('perfil');
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToPerfil}
          >
          </TouchableOpacity>
          <Image style={styles.imagem} source={logoImg} />
          <Text style={styles.tituloPerfil}>Perguntas Frequentes</Text>
        </View>
        <View style={styles.Questionsheader}>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={() => setState(!state)}>
              As vacinas atuais protegem contra as novas variantes de
              coronavírus, como as linhagens de Manaus e do Reino Unido?
            </Text>
            <View>
              {!state ? <Text style={styles.answer}>Sim </Text> : null}
            </View>
          </View>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={() => setState1(!state1)}>
              A vacina contra a Covid-19 já está disponível? Já posso me
              vacinar?
            </Text>
            <View>
              {!state1 ? (
                <Text style={styles.answer}>
                  Sim, mas devera esperar que chega ao seu momento de se vacinar
                </Text>
              ) : null}
            </View>
          </View>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={() => setState2(!state2)}>
              Apenas as pessoas dos grupos prioritários serão imunizadas?
            </Text>
            <View>
              {!state2 ? (
                <Text style={styles.answer}>
                  Não, eles irão receber primeiro a vacina, e após isso será
                  iniciada a vacinação em outras pessoas
                </Text>
              ) : null}
            </View>
          </View>
        </View>
        <Image style={styles.add} source={addImg} />
      </View>
    </View>
  );
}

export default Faq;
