import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;


const api = axios.create({
  baseURL: 'http://localhost:3333/', 
  //Se for testar utilizando emulador, inicie o ngrok na api e troque o link acima pelo do ngrok
});

export default api;
