import React from 'react';
import {View,Text} from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import styles from './styles';

export default function mapa(){
    return(
      <View style={styles.container}>
        <MapView 
         style={styles.mapaEstilo}
          initialRegion={{
          latitude:  -22.743792929481362,
          longitude: -43.46670102358521,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
          <Marker
            coordinate={{
                latitude:  -22.743792929481362,
                longitude: -43.46670102358521,
            }}
            title="Você"
          />

      </MapView>
      </View>
    
    );
}