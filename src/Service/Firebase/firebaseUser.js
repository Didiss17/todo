import firebase from "./firebase";
const myAuth = firebase.auth();
export const login = (email,password) => {
    return myAuth.signInWithEmailAndPassword(email,password);
  };

  export const inscription = async(name, email, password)=> {
    await myAuth.createUserWithEmailAndPassword(email, password)
    return myAuth.currentUser.updateProfile({
        displayName: name
    })
}

export const getUser = ()=>{
  return myAuth.currentUser;
}