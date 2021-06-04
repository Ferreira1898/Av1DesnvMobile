import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import MapComponent from '../../components/mapComponent/mapComponent.js';

export function Map() {

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
      <MapComponent/>
      </View>
      <View style={styles.innerContainer}>
        <ScrollView style={styles.infoContainer}>
          <Text style={styles.title}>Unidade MÉIER I</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>CAP   CNEES</Text>
            <Text style={styles.info}>3.1      6664154</Text>
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.info}>campeao@gmail.com</Text>
            <Text style={styles.infoTitle}>Atendimento</Text>
            <Text style={styles.info}>Seg a sex 7 às 18h</Text>
            <Text style={styles.infoTitle}>Equipe</Text>
            <Text style={styles.info}>Bariri</Text>
            <Text style={styles.infoTitle}>Enfermeiro(a)</Text>
            <Text style={styles.info}>Jorge Pedroso</Text>
            <Text style={styles.infoTitle}>Médico(a)</Text>
            <Text style={styles.info}>Dom Corleone</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
  export default Map;