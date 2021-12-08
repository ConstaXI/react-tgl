import { Route, Routes, BrowserRouter, useLocation, Navigate, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import './globals/style.css'
import Home from './pages/Home'
import RecentGames from './pages/RecentGames'
import { ReactElement, useContext } from 'react'
import AuthContext from './store/auth'
import MainNavigation from './components/MainNavigation'

const RequireAuth = (): ReactElement => {
  const authContext = useContext(AuthContext)
  const location = useLocation()

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
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path='/recent_games' element={<><MainNavigation /><RecentGames /></>} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
