import { useRef } from 'react'

const Login = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <div id="form-container">
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <button>
          Log In
        </button>
      </div>
    </form>
  )
}

export default Login
