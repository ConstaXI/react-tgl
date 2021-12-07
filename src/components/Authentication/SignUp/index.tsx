import { useRef } from 'react'

const SignUp = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <input placeholder="Name" type='name' id='name' required ref={nameInputRef}/>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
      <input placeholder="Password" type='password' id='password' required ref={passwordInputRef}/>
    </form>
  )
}

export default SignUp
