import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import logoImg from "../../assets/faq.png";
import addImg from "../../assets/add.png";

export default function faq() {
  const [faq, setFaq] = useState([]);
  const [state, setState] = useState([false]);
  const navigation = useNavigation();

  function navigateToPerfil() {
    navigation.navigate("perfil");
  }

  function toggleStatus() {
    setState(!state);
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
            <Text style={styles.detailsButtonText}>Voltar</Text>
            <Feather name="arrow-right" size={16} color="#6C63FF" />
          </TouchableOpacity>
          <Image style={styles.imagem} source={logoImg} />
          <Text style={styles.tituloPerfil}>Perguntas Frequentes</Text>
        </View>
        <View style={styles.Questionsheader}>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={toggleStatus}>
              As vacinas atuais protegem contra as novas variantes de
              coronavírus, como as linhagens de Manaus e do Reino Unido?
            </Text>
            <View>
              {!state ? <Text style={styles.answer}>sla irmão </Text> : null}
            </View>
          </View>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={toggleStatus}>
              A vacina contra a Covid-19 já está disponível? Já posso me
              vacinar?{" "}
            </Text>
            <View>
              {!state ? <Text style={styles.answer}>Sim</Text> : null}
            </View>
          </View>
          <View style={styles.corpoPerguntas}>
            <Text style={styles.title} onPress={toggleStatus}>
              Apenas as pessoas dos grupos prioritários serão imunizadas?{" "}
            </Text>
            <View>
              {!state ? (
                <Text style={styles.answer}>Talvez nem eles</Text>
              ) : null}
            </View>
          </View>
        </View>
        <Image style={styles.add} source={addImg} />
      </View>
    </View>
  );
}
