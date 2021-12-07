import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import './globals/style.css'
import Home from './pages/Home'
import RecentGames from './pages/RecentGames'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recent_games' element={<RecentGames />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
