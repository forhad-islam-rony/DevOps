import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './LogIn.module.css';
const SignUp = () => {
  return (
  <>
  <Container>
  <div className={styles.signUp}>
    <h1 className={styles.heading}>Sign In</h1>
    <form action="">
     <div>
     <label htmlFor="name" className={styles.label}>Name:</label>
      <input type="text" name="name" id="name" placeholder='Enter your name'className={styles.input} />
      <label htmlFor="n_id" className={styles.label}>National ID:</label>
      <input type="number" name="n_id" id="n_id" placeholder='Enter your National Id'className={styles.input} />

      </div>
       <div className={styles.buttondiv}>
       <button className={styles.button}>Sign In</button>
       </div>
    </form>
    <div className={styles.msgDiv}>
    <p><span className={styles.msg}>Don't have an account?</span> <Link to="/" className={styles.logIn}>Sign Up</Link></p>
    </div>
    </div>
  </Container>
  </>
  )
}

export default SignUp