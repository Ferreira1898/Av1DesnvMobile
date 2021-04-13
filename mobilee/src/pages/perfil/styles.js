import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#6C63FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
    },
    imagem:{
        width:80,
        height:80,
        padding:20,
        marginLeft:-200,
        marginHorizontal:20,
        marginTop:5,
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:250,
        marginTop:-140,
        
       
    },
    detailsButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        
        
    },
     tituloPerfil:{
        width:'50%',
        height:40,
        flexDirection:'row',
        borderRadius:8,
        backgroundColor:'#FFF',
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8,
        marginTop:10,
        paddingLeft:50,
    },
    headerPerfil:{
       borderRadius:10,
       backgroundColor:'#FFF',
        marginLeft: 100,
        marginTop:-60,

    },
   textoPerfil:{
        color:'#6C63FF',
        width:'80%',
        height:30,
        fontSize:16,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
       paddingHorizontal:8,
   },
    corpo:{
        borderRadius:10,
        backgroundColor:'#FFF',
        marginTop:50,
    },
    textoCorpo:{
        width:'100%',
        height:30,
        fontSize:18,
        color:'#6C63FF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:8,
        
    },
    detailsFAQButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:250,
        marginTop:30,
        
        
        
       
    },
    detailsFAQButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        
        
    },
    


})