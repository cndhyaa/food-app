import { register } from '@/utilities/register'
import styles from '../styles/login.module.css'
import { useState } from 'react'
export default function UserSignup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  return (
    <>
      <div className={styles.loginMain}>
        <main className={styles.main}>
          <header>
            <h4>Sign Up</h4>
          </header>
          <form >
            {/* <div className={styles.form_wrapper}>
              <input id="input" type="text" required placeholder='Full Name'/>
              <label htmlFor="input"></label>
              <br />
            </div> */}
            <div className={styles.form_wrapper}>
             <input id="email" type="text" required placeholder='Email' value={registerEmail} onChange={(e) => {
              setRegisterEmail(e.target.value)
             }}/>
              <label htmlFor="password"></label>

            </div>
            {/* <div className={styles.form_wrapper}>
              <input id="input" type="text" required placeholder='Phone'/>
              <label htmlFor="input"></label>
              
            </div> */}
            <div className={styles.form_wrapper}>
              <input id="password" type="password" required placeholder='Password' value={registerPassword} onChange={(e) => {
              setRegisterPassword(e.target.value)
             }}/>
              <label htmlFor="input"></label>
           
            </div>
            {/* <div className={styles.form_wrapper}>
              <input id="password" type="password" required placeholder='Retype Password'/>
              <label htmlFor="input"></label>
            </div> */}
            <input type='button' onClick={() => register(registerEmail, registerPassword)} value={"Sign up"}/>
            <div className={styles.new_account}>
              Already have account ? <a href="/login">Sign in</a>
            </div>
        
            
          </form>
        </main>
      </div>
    </>
  )
}