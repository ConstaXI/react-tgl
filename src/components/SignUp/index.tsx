import { useRef } from 'react'

const SignUp = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <div id="form-container">
        <div>
          <label htmlFor='name'>Name</label>
          <input type='name' id='name' required ref={nameInputRef}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <button>
          Register
        </button>
      </div>
    </form>
  )
}

export default SignUp
