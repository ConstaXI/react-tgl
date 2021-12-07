import { useRef } from 'react'
import classes from '../style.module.css'

const ForgotPassword = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  return (
    <form>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
      <button className={classes.submit}>
        Send Link
      </button>
    </form>
  )
}

export default ForgotPassword
