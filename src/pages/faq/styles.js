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
    InnerContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        borderRadius: 16,
      },
    imagem:{
        bottom: 80,
        marginRight: 5,
        resizeMode: "contain",
    },
    tituloPerfil:{
        bottom: 40,
        width:'100%',
        height:40,
        flexDirection:'row',
        borderRadius:10,
        borderWidth: 1,
        backgroundColor:'#FFF',
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
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