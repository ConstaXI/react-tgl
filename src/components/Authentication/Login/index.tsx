import { useRef } from 'react'

const Login = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
      <input placeholder="Password" type='password' id='password' required ref={passwordInputRef}/>
    </form>
  )
}

export default Login
