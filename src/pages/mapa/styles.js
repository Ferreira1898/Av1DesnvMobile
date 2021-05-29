import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapaEstilo: {
    top: '2%',
    width: Dimensions.get('window').width,
    height: '100%',
  },
  upperContainer: {
    width: '100%',
    height: '40%',
  },
  innerContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  infoContainer: {
    width: '100%',
    left: '5%',
    top: '2%',
    zIndex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#6C63FF',
  },
  infoBox: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  infoTitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#6C63FF',
    marginBottom: '1%',
    marginTop: '2%',
  },
  info: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6C63FF',
    marginBottom: '1%',
  },
});
