import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c154f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  InnerContainer: {
    flex: 1,
    width: '100%',
    maxHeight: '90%',
    bottom: '5%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  header: {
    position: 'absolute',
    top: '35%',
  },
  imagem: {
    marginRight: 5,
    resizeMode: 'contain',
    bottom: 10,
    left: '30%'
  },
  tituloPerfil: {
    fontSize: 18,
    color: '#6C63FF',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 15,
    paddingHorizontal: '20%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  faq: {
    color: '#252071',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  botão: {
    width: '50%',
    height: 40,
  },
  scrollView: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
  Questionsheader: {
    position: 'absolute',
    top: 280,
  },
  corpoPerguntas: {
    marginBottom: 5,
  },
  title: {
    color: '#252071',
    width: 350,
    borderRadius: 5,
    backgroundColor: '#C4C4C4',
    padding: 8,
  },
  answer: {
    color: '#08B1F9',
    width: 320,
    borderRadius: 5,
    backgroundColor: '#DADADA',
    padding: 8,
    left: 15,
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 260,
    marginTop: -150,
  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  add: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: '7%',
    width: '7%',
  },
});
