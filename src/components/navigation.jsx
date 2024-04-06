import Link from "next/link"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLayoutEffect, useState } from "react";
import { auth } from "../../firebaseConfig"
import { signOutUser } from "@/utilities/login";

export default function Navigation() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useLayoutEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser?.email){
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        })
    
      }, [])
    return (
        <section className="Menu">
            <div className="nav">
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    {/* <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/product">Product</Link></li> */}
                </ul> 
                    {isLoggedIn &&  <div><input onClick={signOutUser} className="btn btn-danger" type="submit" value="logout" name="logout" /></div>

                    }
                    {!isLoggedIn && <div>
                    <a href = "http://localhost:3000/login"> <input className="btn btn-text pr-3" type="submit" value="Sign In" name="Signin" /></a>
                    <a style = {{textDecoration:'none'}} href = "http://localhost:3000/UserSignup"> <input className="btn btn-danger" type="submit" value="Sign Up" name="Signup" /></a>
</div>
}
            </div>
        </section>
    )
}
