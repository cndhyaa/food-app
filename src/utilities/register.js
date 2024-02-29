import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"

const register = async (registerEmail, registerPassword) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log({ registerEmail, registerPassword })
        console.log(user)
        return user;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

export { register }
