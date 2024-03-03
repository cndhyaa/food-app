import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"

const login = async (loginEmail, loginPassword) => {
    try {

        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        window.location.href='/UserSigninHome'
        console.log({ loginEmail, loginPassword })
        console.log(user)
        
    } catch (error) {
        console.log(error.message);
        return false;
    }
};
const signOutUser = async () => {
    try{
    
        signOut(auth)
        window.location.href = '/'

    } catch (error){
        console.log(error.message);
    }
}
export { login, signOutUser }

