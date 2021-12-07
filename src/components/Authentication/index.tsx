import { useState } from 'react'
import classes from './style.module.css'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

const Authentication = (): JSX.Element => {
  const [authentication, setAuthentication] = useState<string>('login')

  return (
    <div className={classes.container}>
      {authentication === 'login' && (
        <>
          <h2 className={classes.title}>Authentication</h2>
          <div className={classes.formContainer}>
            <Login>
              <button onClick={() => setAuthentication('forgotPassword')} className={classes.forgotPassword}>I forgot my password</button>
            </Login>
          </div>
          <button onClick={() => setAuthentication('signUp')} className={classes.action}>Sign Up</button>
        </>
      )}
      {authentication === 'signUp' && (
        <>
          <h2 className={classes.title}>Registration</h2>
          <div className={classes.formContainer}>
            <SignUp/>
          </div>
          <button onClick={() => setAuthentication('login')} className={classes.action}>Back</button>
        </>
      )}
      {authentication === 'forgotPassword' && (
        <>
          <h2 className={classes.title}>Reset Password</h2>
          <div className={classes.formContainer}>
            <ForgotPassword/>
          </div>
          <button onClick={() => setAuthentication('login')} className={classes.action}>Back</button>
        </>
      )}
    </div>
  )
}

export default Authentication
