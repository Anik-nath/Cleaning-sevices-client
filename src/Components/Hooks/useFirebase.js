import { useState } from "react";
import initializeFirebase from "../Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState('');
    const [error,setError] = useState('');

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn= ()=>{
        signInWithPopup(auth, provider)
        .then(() => {
         alert("sign up successfully");
         setError('');
        }).catch((error) => {
         setError(error.message)
        });
    }

    //observe user
    const Subscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser('');
        }
        return () => Subscribe;
      });

    //create new user
    const createUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('successfully create user')
            setError('');
        })
        .catch((error) => {
            setError(error.message)
        });
    }
    //login with email and password
    const login =(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("login successfully");
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    //signout
    const signout =()=>{
        signOut(auth)
        .then(() => {
            alert("sign out successfully");
            setError('');
          }).catch((error) => {
            setError(error.message);
          });
    }

    return {
        user,
        googleSignIn,
        signout,
        createUser,
        login,
        error,
        handleShow,
        handleClose,
        show
    }
}
export default useFirebase;