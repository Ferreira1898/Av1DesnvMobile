import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Retrieve() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");

  function navigateToLogin() {
    navigation.navigate("login");
  }
  function navigateToSend() {
    navigation.navigate("send");
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.tituloLogin}>Recuperar acesso:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Seu celular: </Text>
          <TextInput
            placeholder="(00) 00000-0000"
            style={styles.textInput}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={navigateToSend}>
          <Text style={styles.textoLogin}>Enviar SMS de recuperação</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToLogin}
        >
          <Text style={styles.detailsButtonText}>Cancelar</Text>
          <Feather name="arrow-right" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
