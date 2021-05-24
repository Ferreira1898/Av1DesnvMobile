import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Send() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");

  function navigateToLogin() {
    navigation.navigate("login");
  }
  
  function navigateToRetrieve(){
    navigation.navigate('retrieve');
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <StatusBar hidden />
        <Text style={styles.tituloLogin}>Defina uma nova senha:</Text>
        <View style={styles.box}>
          <Text style={styles.texto}>Nova senha: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNome(text)}
          />
          <Text style={styles.texto}>Confirme sua nova senha: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={navigateToLogin}>
          <Text style={styles.textoLogin}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToRetrieve}
        >
          <Text style={styles.detailsButtonText}>Cancelar</Text>
          <Feather name="arrow-right" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
