import { useRef } from 'react'

const ForgotPassword = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <div id="form-container">
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <button>
          Send Link
        </button>
      </div>
    </form>
  )
}

export default ForgotPassword
