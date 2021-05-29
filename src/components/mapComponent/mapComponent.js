import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from './styles';

export function MapComponent() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Permissions.askAsync(
        Permissions.LOCATION
      );
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({
          options: { enableHighAccuracy: true },
        });
        setOrigin(
          (value = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        );
      } else {
        throw new Error('Location permission not granted');
      }
    })();
  }, (inputs = []));
  return (
    <MapView
      style={styles.mapaEstilo}
      initialRegion={origin}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{
          latitude: -22.743792929481362,
          longitude: -43.46670102358521,
        }}
        title='Você'
      />
    </MapView>
  );
}

export default MapComponent;
