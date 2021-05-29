import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  InnerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 15,
    maxHeight: '95%',
    maxWidth: '95%',
  },

  header: {
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 80,
    bottom: 15,
  },
  textHeader: {
    fontSize: 24,
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  textoH: {
    color: '#6C63FF',
    fontWeight: 'bold',
    top: 12,
  },
  textInput: {
    width: 220,
    backgroundColor: '#FFF',
    borderColor: '#6C63FF',
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 2,
    marginBottom: 20,
    left: 20,
  },
  btnCadastro: {
    borderColor: '#6C63FF',
    borderWidth: 2,
    borderRadius: 9,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    top: 22,
  },
  texto: {
    color: '#6C63FF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 25,
  },
  detailsButtonText: {
    color: '#6C63FF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoBox: {
    borderColor: '#6C63FF',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    right: 20,
  },

  imgInfo: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },

  registerBox: {
    top: 20,
  },

  iconHelp: {
    left: 320,
    top: 12,
    position: 'absolute',
  },
});