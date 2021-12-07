import { FormEvent, ReactNode, useRef } from 'react'
import classes from '../style.module.css'
import baseUrl from '../../../api'
import { useNavigate } from 'react-router-dom'

const Login = (props: { children: ReactNode }): JSX.Element => {
  const navigate = useNavigate()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    fetch(`${baseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInputRef.current!.value,
        password: passwordInputRef.current!.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      if (response.ok) {
        navigate('recent_games')
      } else {
        const data = await response.json()
        let errorMessage = 'Authentication failed.'
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message
        }
        throw new Error(errorMessage)
      }
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
      <input placeholder="Password" type='password' id='password' required ref={passwordInputRef}/>
      {props.children}
      <button className={classes.submit} type="submit">
        Log In
      </button>
    </form>
  )
}

export default Login
