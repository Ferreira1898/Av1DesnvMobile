import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6C63FF',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
      
    },
    InnerContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding:40,
        borderRadius: 16,
        
    },
    tituloLogin:{
        width:'100%',
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
        paddingRight:20,
        marginTop:-30,
        marginVertical:30,
    },
    imagem:{
       marginTop:30,
       marginBottom:5,
       marginRight:5,
       resizeMode: 'contain'
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
        color:'#6C63FF',
        fontWeight:'bold',
        marginRight:200,
    },
  textInput:{
        marginTop:5,
        width:300,
        height:40,
        backgroundColor:'#FFF',
        borderColor:'#6C63FF',
        borderWidth: 1,
        borderRadius:20,
        paddingLeft:10,
        marginBottom:20,
     },
     btnLogin:{
        width:'50%',
        height:40,
        width:300,
        backgroundColor:'#6C63FF',
        borderColor:'#6C63FF',
        borderWidth: 1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10,
     },
     textoLogin:{
        marginTop:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',
        justifyContent:'center',
        alignItems:'center',
     },
     detailsButton:{
        marginTop:10,
        width:'50%',
        height:40,
        width:300,
        backgroundColor:'#FFF',
        borderColor:'#6C63FF',
        borderWidth: 1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    
    },
    detailsButtonText:{
        marginTop:15,
        fontSize:20,
        fontWeight:'bold',
        color:'#6C63FF',
        justifyContent:'center',
        alignItems:'center',
    },
    retrieveAcessButton:{
        marginRight:175,
        marginTop:2,
        backgroundColor:'#FFF',
        borderColor:'#6C63FF',
        justifyContent:'center',
        alignItems:'center',
    },
    retrieveAcessText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#6C63FF',
        justifyContent:'center',
        alignItems:'center',
    },
})