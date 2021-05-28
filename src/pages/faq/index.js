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
import { faqModel } from "../../data/faq/faqModel.js";
import {detailsOptions} from "../../components/detailOptions/detailOptions.js";

export function Faq() {
  const [faq, setFaq] = useState([]);
  const [state, setState] = useState([false]);
  const navigation = useNavigation();
  //const [optionView, setOptionView] = useState<string>("[]");

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
        {/*
        <View style={styles.Questionsheader}>
          {faqModel.map((value) => {
            return(<detailsOptions />)
          })}
        </View>
        */}
        <Image style={styles.add} source={addImg} />
      </View>
    </View>
  );
}

export default Faq;
