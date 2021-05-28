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
        marginTop:10,
        marginBottom:8,
    },
    tituloPerfil:{
        fontSize: 24,
        marginBottom: 16,
        marginTop: 20,
        color: "#6C63FF",
        fontWeight: "bold",
        borderRadius:8,
        backgroundColor:'#FFF',
    },
    faq:{
        color:'#FFF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,

    },
    botão:{
        width: '50%',
        height:40,
    },

      title:{
        borderRadius:8,
        backgroundColor:'#FFF',
        marginTop:10,

      },
      detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:260,
        marginTop:5,
       
    },
    detailsButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        
        
    },
    corpoPerguntas:{
        marginTop:5,
    },
})