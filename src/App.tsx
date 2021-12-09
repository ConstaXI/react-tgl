import { Route, Routes, BrowserRouter, useLocation, Navigate, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import './globals/style.css'
import Login from './pages/Login'
import RecentGames from './pages/RecentGames'
import { ReactElement, useContext } from 'react'
import AuthContext from './store/auth'
import NewBet from './pages/NewBet'

const RequireAuth = (): ReactElement => {
  const location = useLocation()
  const authContext = useContext(AuthContext)

  if (!authContext.isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/' state={{ from: location }} />
  }

  return <Outlet />
}

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Layout>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path='/recent_games' element={<RecentGames />} />
            <Route path='/new_bet' element={<NewBet />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
