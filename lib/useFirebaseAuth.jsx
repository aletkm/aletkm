import { useState, useEffect } from 'react'
import firebase from './firebase'

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fbToken, setfbToken] = useState(null)
    
  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);

  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () =>
    firebase.auth().signOut().then(clear);

  const sendPasswordResetEmail = (email) => 
    firebase.auth().sendPasswordResetEmail(email);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);


useEffect(() => {
  return firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const token = await user.getIdToken();
      setfbToken(token)
    }
  });
}, []);

  
  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    fbToken
  };
}
