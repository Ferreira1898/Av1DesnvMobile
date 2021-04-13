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
        marginTop:-50,
        marginBottom:8,
    },
    tituloPerfil:{
        width:'100%',
        height:40,
        flexDirection:'row',
        borderRadius:8,
        backgroundColor:'#FFF',
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:50,
    },
    faq:{
        color:'#FFF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,

    },
    botão:{
        width: '50%',
        height:40,
    },
    scrollView: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
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
        marginTop:-150,
       
    },
    detailsButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        
        
    },
})