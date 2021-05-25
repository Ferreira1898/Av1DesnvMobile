import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        height:"100%",
        alignItems: "center",
    },
    upperContainer:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6C63FF",
        height: "35%",
        width:"100%",
    },
    icons:{
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "#000000",
        width: "100%",
        height:"20%",
        bottom: 20,
        opacity:0.4
    },
    bell: {
        right:10,
        top:5,
    },
    marker: {
        right:10,
        bottom:15,
    },
    name:{
        fontFamily:"Roboto",
        fontSize:18,
        padding: 10,
        color: "#FFF",
        bottom:10,
    },
    presetention:{
        alignItems: "center",
        justifyContent: "center",
    },
    imagem:{
        width: 140,
        height: 140,
        padding: 20,
        borderRadius: 97,
        zIndex:1,
        borderColor:"#000000",
        borderWidth: 1,
    },
    line:{
        top: 8,
        width:360,
        borderWidth: 1,
        borderColor:"#DADADA",
    },
    lowerContainer:{
        top:10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFF",
        height: "60%",
        width:"90%",
    },
    title:{
        fontFamily:"Roboto",
        fontSize:18,
        padding: 2,
        color: "#6C6AE2",
    },
    mainBox:{
        width:"100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#6C63FF",
    },
    mainBoxText:{
        fontFamily:"Roboto",
        fontSize:18,
        color: "#6C6AE2",
    },
    centersBox:{
        top: "5%",
        width:"100%",
        height: "50%",
        justifyContent: "space-between",

    },
    boxTitle:{
        fontFamily:"Roboto",
        fontSize:18,
        padding: 10,
        color: "#6C6AE2",
        bottom:10,
    },
    box:{
        width:"100%",
        height: "25%",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#6C63FF",
        padding:10,
        marginBottom:15,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    boxText:{
        fontFamily:"Roboto",
        fontSize:18,
        color: "#6C63FF",
        top:5,
    },
    arrow:{
        bottom:"50%",
        left:"90%",
        bottom:12,
    }
});
