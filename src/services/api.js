import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
http://127.0.0.1:3333
*/

const url = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? `http://b6357512d6cc.ngrok.io`
  : `http://localhost:3333/`;

const api = axios.create({
  baseURL: 'http://b6357512d6cc.ngrok.io',
});

export default api;