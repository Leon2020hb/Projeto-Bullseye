const firebaseConfig = {
    apiKey: "AIzaSyA6WhEWE-F-q43PX5nU0H1Az-eZDkJ-zOU",
    authDomain: "bullseye-fe54c.firebaseapp.com",
    projectId: "bullseye-fe54c",
    storageBucket: "bullseye-fe54c.appspot.com",
    messagingSenderId: "714317220509",
    appId: "1:714317220509:web:1dc9183ff60112f1962274"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
