import { FormEvent, ReactNode, useContext, useRef } from 'react'
import classes from '../style.module.css'
import baseUrl from '../../../api'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../store/auth'

type Props = {
  children: ReactNode
}

const Login = (props: Props): JSX.Element => {
  const navigate = useNavigate()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const authContext = useContext(AuthContext)

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
        return response.json()
      } else {
        const data = await response.json()
        let errorMessage = 'Authentication failed.'
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message
        }
        throw new Error(errorMessage)
      }
    }).then(data => {
      const expirationTime = new Date(data.token.expires_at)

      authContext.login(data.token.token, expirationTime.getTime())

      navigate('/recent_games')
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef} className={classes.authInput} />
      <input placeholder="Password" type='password' id='password' required ref={passwordInputRef} className={classes.authInput}/>
      {props.children}
      <button className={classes.submit} type="submit">
        Log In
      </button>
    </form>
  )
}

export default Login
