import { login } from '@/utilities/login'

import styles from '../styles/login.module.css'
import { useState } from 'react'
export default function Login() {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  return (
    <>
    
   
      <div className={styles.loginMain}>
        <main className={styles.main}>
          <header>
            <h4>Login</h4>
          </header>
          <form >
            <div className={styles.form_wrapper}>
              <input id="email" type="text" required placeholder='Email'  value={loginEmail} onChange={(e) => {
              setloginEmail(e.target.value)
              }}/>
              <label htmlFor="email"></label>
              <br />
            </div>
            <div className={styles.form_wrapper}>
             <input id="password" type="password" required placeholder='Password'  value={loginPassword} onChange={(e) => {
              setloginPassword(e.target.value) 
              }}/>
              <label htmlFor="password"></label>

            </div>
            <div className={styles.remember_box}>
              <div className={styles.remember}>
                <input type="checkbox" />
                Remember me
              </div>
              {/* <a href="#">Forgot Password ?</a> */}
            </div>
            <input type='button' onClick={() => login(loginEmail, loginPassword)} value={"Login"}/>
            <div className={styles.new_account}>
              Don't have account ? <a href="/UserSignup">Sign up</a>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}