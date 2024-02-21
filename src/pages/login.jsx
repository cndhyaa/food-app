
import styles from '../styles/login.module.css'
export default function products() {
  return (
    <>
    
   
      <div className={styles.loginMain}>
        <main className={styles.main}>
          <header>
            <h4>Login</h4>
          </header>
          <form >
            <div className={styles.form_wrapper}>
              <input id="input" type="text" required placeholder='Username'/>
              <label for="input"></label>
              <br />
            </div>
            <div className={styles.form_wrapper}>
             <input id="password" type="password" required placeholder='Password' />
              <label for="password"></label>

            </div>
            <div className={styles.remember_box}>
              <div className={styles.remember}>
                <input type="checkbox" />
                Remember me
              </div>
              {/* <a href="#">Forgot Password ?</a> */}
            </div>
            <button>Login</button>
            <div className={styles.new_account}>
              Don't have account ? <a href="#">Sign up</a>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}