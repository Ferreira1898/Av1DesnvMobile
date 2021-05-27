import {StyleSheet,Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  
    container:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',

    },
    mapaEstilo:{
     width: Dimensions.get('window').width,
     height:'100%', 
    },
})