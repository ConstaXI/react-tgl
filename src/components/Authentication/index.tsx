import { useRef } from 'react'
import './style.css'

const Authentication = (): JSX.Element => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  return (
    <div id="container">
        <form>
            <div id="form-container">
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required ref={passwordInputRef} />
                </div>
                <button>
                    I forgot my password
                </button>
                <button>
                    Log In
                </button>
            </div>
            <button>
                Sign Un
            </button>
        </form>
    </div>
  )
}

export default Authentication
