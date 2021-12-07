import { useState } from 'react'
import classes from './style.module.css'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

const Authentication = (): JSX.Element => {
  const [authentication, setAuthentication] = useState<string>('login')

  const changeAuth = (authType: string): void => {
    setAuthentication(authType)
  }

  return (
    <div className={classes.container}>
      {authentication === 'login' && (
        <>
          <h2 className={classes.title}>Authentication</h2>
          <div className={classes.formContainer}>
            <Login/>
            <button onClick={changeAuth.bind(this, 'forgotPassword')} className={classes.forgotPassword}>
              I forgot my password
            </button>
            <button className={classes.submit}>
              Log In
            </button>
          </div>
          <button onClick={changeAuth.bind(this, 'signUp')} className={classes.action}>Sign Up</button>
        </>
      )}
      {authentication === 'signUp' && (
        <>
          <h2 className={classes.title}>Registration</h2>
          <div className={classes.formContainer}>
            <SignUp/>
            <button className={classes.submit}>
              Register
            </button>
          </div>
          <button onClick={changeAuth.bind(this, 'login')} className={classes.action}>Back</button>
        </>
      )}
      {authentication === 'forgotPassword' && (
        <>
          <h2 className={classes.title}>Reset Password</h2>
          <div className={classes.formContainer}>
            <ForgotPassword/>
            <button className={classes.submit}>
              Send Link
            </button>
          </div>
          <button onClick={changeAuth.bind(this, 'login')} className={classes.action}>Back</button>
        </>
      )}
    </div>
  )
}

export default Authentication
