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
    tituloLogin:{
        width:'50%',
        height:40,
        flexDirection:'row',
        borderRadius:8,
        backgroundColor:'#FFF',
        justifyContent: 'center',
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        marginTop:-10,
        paddingLeft:30,
        

    },
    header: {
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        paddingLeft:10,
        marginTop:-30,
        marginVertical:30,
    },
    imagem:{
        width:230,
        height:100,
        marginTop:30,
       marginBottom:5,
       marginRight:5,
    },
    textHeader:{
        height:40,
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        marginVertical:20,
        backgroundColor:'white',
        
    },
    texto:{
        color:'#FFF',
        fontWeight:'bold',
        marginRight:250,
    },
  textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:20,
     },
     btnLogin:{
        width:'50%',
        height:40,
        backgroundColor:'#FFF',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
     },
     textoLogin:{
        fontSize:20,
        fontWeight:'bold',
        color:'#6C63FF',
        justifyContent:'center',
        alignItems:'center',
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
})