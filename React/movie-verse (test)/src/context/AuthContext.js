import { createContext , useContext, useEffect , useState } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut , onAuthStateChanged, } from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  console.log("AuthContextProvider: Initializing");
  const [user, setUser] = useState({});


  function signUp(email, password) {
    console.log("signUp: ", email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  

  function logIn(email, password) {
    console.log("logIn: ", email, password);
    return signInWithEmailAndPassword(auth, email, password);
  }
 

  function logOut() {
    console.log("logOut");
    return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("onAuthStateChanged: ", currentUser);
            setUser(currentUser);  
        });
        return ()=> {
          console.log("onAuthStateChanged: Unsubscribing");
          unsubscribe()};
    });
    console.log("AuthContextProvider: Initialized");

    return (
        <AuthContext.Provider value={{ signUp , logIn, logOut ,user }}>
        {console.log("AuthContextProvider: Render - AuthContext.Provider")}
        {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}




//   useEffect(() => {
//    onAuthStateChanged(auth, (user) => {
//     setUser(user);
//     });
//   }
//     , []);
