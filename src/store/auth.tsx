import { createContext, useCallback, useEffect, useState } from 'react'

type TAuthContext = {
  token: string | undefined,
  isLoggedIn: boolean,
  login: (token: string, expirationTime: number) => void,
  logout: () => void
}

const AuthContext = createContext<TAuthContext>({} as TAuthContext)

const calculateRemainingTime = (expirationTime: number) => {
  const currentTime = new Date().getTime()
  const adjExpirationTime = new Date(expirationTime).getTime()

  return adjExpirationTime - currentTime
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedExpirationTime = localStorage.getItem('expirationTime')

  const remainingTime = calculateRemainingTime(Number(storedExpirationTime))

  if (remainingTime <= 3600000) {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    return null
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

type Props = {
  children: JSX.Element
}

export const AuthContextProvider = (props: Props) => {
  const tokenData = retrieveStoredToken()
  let initialToken
  if (tokenData && tokenData.token) {
    initialToken = tokenData.token
  }
  const [token, setToken] = useState(initialToken)

  const userIsLoggedIn = !!token

  let logoutTimer: any

  const logoutHandler = useCallback(() => {
    setToken(undefined)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (token: string, expirationTime: number) => {
    setToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('expirationTime', String(expirationTime))

    const remainingTime = calculateRemainingTime(expirationTime)

    logoutTimer = setTimeout(logoutHandler, remainingTime)
  }

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration)
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  }, [logoutHandler, tokenData])

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
