import firebase from 'firebase'



let config = {
    apiKey: "AIzaSyDrTfwXNoBA91E4qJe57YBaE6iUCMdeFxs",
    authDomain: "todo-a1957.firebaseapp.com",
    projectId: "todo-a1957",
    storageBucket: "todo-a1957.appspot.com",
    messagingSenderId: "775361717231",
    appId: "1:775361717231:web:f1cd1a510c7c41e1884c1a",
    measurementId: "G-DK4FE7MXZX",
    databaseURL: "https://todo-a1957-default-rtdb.europe-west1.firebasedatabase.app",

};

firebase.initializeApp(config);

export default firebase;