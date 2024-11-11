import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Auth } from "../FireBase/firebase.config";

export const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signInUser=(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(Auth, email, password)
    }

    useEffect(()=>{
     const subcribe = onAuthStateChanged(Auth, (user)=>{
        setUser(user) 
        setLoading(false)
     })

     return ()=>{
        subcribe()
     }
    },[]);

    const googleSignIn = ()=>{
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(Auth, googleProvider)
    }

    const updateUserProfile =(name)=>{
      return  updateProfile(Auth.currentUser, {displayName:name})
    }

    const signOutUser =()=>{
       return signOut(Auth)
    }


    const authInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        googleSignIn,
        updateUserProfile
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;