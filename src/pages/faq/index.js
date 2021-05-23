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

export default function faq() {
  const [faq, setFaq] = useState([]);

  const navigation = useNavigation();

  function navigateToPerfil() {
    navigation.navigate("perfil");
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToPerfil}
        >
          <Text style={styles.detailsButtonText}>Voltar</Text>
          <Feather name="arrow-right" size={16} color="#FFF" />
        </TouchableOpacity>
        <Image style={styles.imagem} source={logoImg} />
        <Text style={styles.tituloPerfil}>Perguntas Frequentes</Text>
        <View style={styles.corpoPerguntas}>
          <Text style={styles.title}>
            As vacinas atuais protegem contra as novas variantes de coronavírus,
            como as linhagens de Manaus e do Reino Unido?
          </Text>
          <Button
            title="Leia Mais +"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          <Text style={styles.title}>
            A vacina contra a Covid-19 já está disponível? Já posso me vacinar?{" "}
          </Text>
          <Button
            title="Leia Mais +"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          <Text style={styles.title}>
            Apenas as pessoas dos grupos prioritários serão imunizadas?{" "}
          </Text>
          <Button
            title="Leia Mais +"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>
    </View>
  );
}
