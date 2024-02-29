
import styles from '../styles/login.module.css'
export default function UserSignup() {
  return (
    <>
      <div className={styles.loginMain}>
        <main className={styles.main}>
          <header>
            <h4>Sign Up</h4>
          </header>
          <form >
            <div className={styles.form_wrapper}>
              <input id="input" type="text" required placeholder='Full Name'/>
              <label for="input"></label>
              <br />
            </div>
            <div className={styles.form_wrapper}>
             <input id="email" type="text" required placeholder='Email' />
              <label for="password"></label>

            </div>
            <div className={styles.form_wrapper}>
              <input id="input" type="text" required placeholder='Phone'/>
              <label for="input"></label>
              
            </div>
            <div className={styles.form_wrapper}>
              <input id="password" type="password" required placeholder='Password'/>
              <label for="input"></label>
           
            </div>
            <div className={styles.form_wrapper}>
              <input id="password" type="password" required placeholder='Retype Password'/>
              <label for="input"></label>
            </div>
            <button>SignUp</button>
            <div className={styles.new_account}>
              Already have account ? <a href="#">Sign in</a>
            </div>
        
            
          </form>
        </main>
      </div>
    </>
  )
}