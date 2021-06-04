import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c154f',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  InnerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 15,
    maxHeight: '98%',
    width: '95%',
    display: 'flex',
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
    marginTop: '10%',
    display: 'flex',
    width: '95%',
    bottom: '3%',
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
    width: '65%',
    height: 40,
    backgroundColor: '#FFF',
    borderColor: '#6C63FF',
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 2,
    paddingLeft: 10,
    marginBottom: 20,
  },
  btnCadastro: {
    borderColor:'#6C63FF',
    borderWidth: 2,        
    borderRadius:9,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center',
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
    paddingLeft: '5%',
  },

  imgInfo: {
    width: 30,
    height: 30,
    marginLeft: '10%',
  },

  registerBox: {
    top: 20,
  },

  iconHelp: {
    left: '110%',
    top: 12,
    position: 'absolute',
  },
});
