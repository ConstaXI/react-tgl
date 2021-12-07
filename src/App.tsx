import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import './globals/style.css'
import Home from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
