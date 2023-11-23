import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebaseConfig"

export const AuthContex= createContext(null)

const AuthProvidev = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)


    // register
 const signs =( email, password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

//   profile 
const profile =(name,photo)=>{
    setloading(true)
    return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:photo
        
      }) 
  }
        
      
  // sign out
const logout = ()=>{
    setloading(true)
  return signOut(auth)
  }
// login
const logins =(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }




//   hold our user
useEffect(()=>{
    const unsuscribe =onAuthStateChanged(auth,(current)=>{
        setuser(current)
        setloading(false)
    })
    return()=>{
        return unsuscribe()
    }
},[])

    const info= {user,signs,logout,logins,profile}
  return (
    <AuthContex.Provider value={info}>
           { children}
    </AuthContex.Provider>
  )
}

export default AuthProvidev