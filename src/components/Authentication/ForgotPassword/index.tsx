import { useRef } from 'react'

const ForgotPassword = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
    </form>
  )
}

export default ForgotPassword
