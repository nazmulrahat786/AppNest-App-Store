import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

// console.log(user);
const creatUser =(email,password) =>{
     setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}

    const resetPassword = (email)=>{
       return  sendPasswordResetEmail(auth,email)
    }


const updateUser = (updatedData)=>{
return updateProfile(auth.currentUser,updatedData)
}
const googleLoginPopUp = ()=>{
     
  return  signInWithPopup(auth, provider)

    
}


const logOut = ()=>{
   
    return signOut(auth)
}
const logIn =(email,password)=>{
     setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
  const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return () =>{
unsubcribe()
    }
},[])


    const authData = {
user,
setUser
,
creatUser,
logOut ,
logIn,
 setLoading,
  loading,
  updateUser,
  googleLoginPopUp,
  resetPassword
    }








    return <AuthContext value={authData}>

{children}

    </AuthContext>
};

export default AuthProvider;