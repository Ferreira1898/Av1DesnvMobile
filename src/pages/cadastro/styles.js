import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6C63FF',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
      
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textHeader:{
        width:'80%',
        height:40,
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        backgroundColor:'white',
        borderRadius:20,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:80,
    },
    textoH:{
        color:'#FFF',
        fontWeight:'bold',
        marginRight:240,


    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
       
     },
     btnCadastro:{
        width:'50%',
        height:40,
        backgroundColor:'#FFF',
        borderRadius:20,
        marginTop:8,
        justifyContent:'center',
        alignItems:'center',
     },
     texto:{
         color:'#6C63FF',
         fontSize:20,
        fontWeight:'bold',
     },

     detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
    },
    detailsButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',

    },
  
  });
