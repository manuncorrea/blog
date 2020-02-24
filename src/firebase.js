import app from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAjfmSA_BcB1UXqV2pMfSvYSWm3Cxt2FRg",
  authDomain: "react-app-b888f.firebaseapp.com",
  databaseURL: "https://react-app-b888f.firebaseio.com",
  projectId: "react-app-b888f",
  storageBucket: "react-app-b888f.appspot.com",
  messagingSenderId: "558130098473",
  appId: "1:558130098473:web:0acca6255474590f240738",
  measurementId: "G-ZBL7JFT3TE"
};

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);

    this.app = app.database();
  }

  login(email, password){
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  async register(nome, email, password){
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.database().ref('usuarios').child(uid).set({
      nome: nome 
    })
  }

  isInitialized(){
    return new Promise(resolve =>{
      app.auth().onAuthStateChanged(resolve);
    })
  }
}

export default new Firebase();