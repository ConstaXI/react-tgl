import { FormEvent, useContext, useRef } from 'react'
import baseUrl from '../../../api'
import { useNavigate } from 'react-router-dom'
import classes from '../style.module.css'
import AuthContext from '../../../store/auth'

const SignUp = (): JSX.Element => {
  const navigate = useNavigate()

  const authContext = useContext(AuthContext)

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    fetch(`${baseUrl}/user/create`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInputRef.current!.value,
        name: nameInputRef.current!.value,
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
      <input placeholder="Name" type='name' id='name' required ref={nameInputRef}/>
      <input placeholder="Email" type='email' id='email' required ref={emailInputRef}/>
      <input placeholder="Password" type='password' id='password' required ref={passwordInputRef}/>
      <button className={classes.submit}>
        Register
      </button>
    </form>
  )
}

export default SignUp
