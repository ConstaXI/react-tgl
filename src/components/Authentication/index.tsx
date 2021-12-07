import { useState } from 'react'
import './style.css'
import Login from '../Login'
import SignUp from '../SignUp'
import ForgotPassword from '../ForgotPassword'

const Authentication = (): JSX.Element => {
  const [authentication, setAuthentication] = useState<string>('login')

  const changeAuth = (authType: string): void => {
    setAuthentication(authType)
  }

  return (
    <>
      {authentication === 'login' && (
        <>
          <div>
            <Login/>
            <button onClick={changeAuth.bind(this, 'forgotPassword')}>
              I forgot my password
            </button>
          </div>
          <button onClick={changeAuth.bind(this, 'signUp')}>Sign Up</button>
        </>
      )}
      {authentication === 'signUp' && (
        <>
          <SignUp/>
          <button onClick={changeAuth.bind(this, 'login')}>Back</button>
        </>
      )}
      {authentication === 'forgotPassword' && (
        <>
          <ForgotPassword/>
          <button onClick={changeAuth.bind(this, 'login')}>Back</button>
        </>
      )}
    </>
  )
}

export default Authentication
