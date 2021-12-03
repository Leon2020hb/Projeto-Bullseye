/**
 * fb.js
 * 
 * Created by André Luferat → http://www.luferat.net/
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * Chaves e métodos de conexão com o serviço Firebase → https://firebase.com/
 * 
 * LEMBRE-SE de trocar essa chaves pelas disponibilizadas pelo SEU firebase.com. * 
 */

const firebaseConfig = {
    apiKey: "AIzaSyA6WhEWE-F-q43PX5nU0H1Az-eZDkJ-zOU",
    authDomain: "bullseye-fe54c.firebaseapp.com",
    projectId: "bullseye-fe54c",
    storageBucket: "bullseye-fe54c.appspot.com",
    messagingSenderId: "714317220509",
    appId: "1:714317220509:web:1dc9183ff60112f1962274"
};

// Inicializa Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
