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

    InnerContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        bottom: "5%",
        borderRadius: 16,
        maxHeight:"90%",
    },

    header: {
        justifyContent:'center',
        alignItems:'center',
    },
    
    textHeader: {
        fontSize:24,
        color:'#6C63FF',
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'#6C63FF',
        borderRadius:15,
        paddingHorizontal:80,
        paddingVertical:10,
        top:100,
    },

    textoH: {
        color:'#6C63FF',
        fontWeight:'bold',

    },

    textInput: {
        marginTop:5,
        width:300,
        height:40,
        backgroundColor:'#FFF',
        borderColor:'#6C63FF',
        borderWidth: 2,
        borderRadius:20,
        paddingLeft:10,
        marginBottom:20,
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
    },

    texto: {
        color:'#6C63FF',
        fontSize:20,
        fontWeight:'bold',
    },

    detailsButton: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
    },

    detailsButtonText: {
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',

    },

    infoBox: {
        borderColor: '#6C63FF',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
  
    imgInfo: {
        width: 40,
        height: 40,
        alignItems: 'flex-end'
    }
  });
