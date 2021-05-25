import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import profileImg from "../../assets/campeao.jpg";
import bell from "../../assets/Bell.png";
import marker from "../../assets/NotificationMarker.png";
import arrow from "../../assets/arrow.png";

export default function Home() {
  const navigation = useNavigation();

  function navigateToPerfil() {
    navigation.navigate("perfil");
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.icons}>
          <Image style={styles.bell} source={bell} />
          <Image style={styles.marker} source={marker} />
        </View>
        <View style={styles.presetention}>
          <TouchableOpacity onPress={navigateToPerfil}>
            <Text style={styles.name}>Ola, Campeão </Text>
            <Image style={styles.imagem} source={profileImg} />
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.title}>A 2ª dose da vacina estará disponível</Text>
        <View style={styles.mainBox}>
          <Text style={styles.mainBoxText}>
            Dia 8 de Maio até Dia 18 de Maio
          </Text>
        </View>
        <View style={styles.centersBox}>
          <Text style={styles.boxTitle}>Postos Disponíveis</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>Meier 1</Text>
            <Image style={styles.arrow} source={arrow} />
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Meier 2</Text>
            <Image style={styles.arrow} source={arrow} />
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Meier 3</Text>
            <Image style={styles.arrow} source={arrow} />
          </View>
        </View>
      </View>
    </View>
  );
}
