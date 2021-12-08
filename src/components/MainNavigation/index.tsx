import { useContext } from 'react'
import AuthContext from '../../store/auth'
import classes from './style.module.css'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const MainNavigation = (): JSX.Element => {
  const authContext = useContext(AuthContext)

  const logoutHandler = () => {
    authContext.logout()
  }

  return (
    <>
      <header className={classes.header}>
        <div>
          <h1 className={classes.logo}>TGL</h1>
          <hr className={classes.logoLine}/>
        </div>
        <nav>
          <ul>
            <li><div className={classes.item}>Account</div></li>
            <li><Link to='/' onClick={logoutHandler} className={classes.item}>Leave &nbsp; <FiArrowRight/></Link></li>
          </ul>
        </nav>
      </header>
      <hr className={classes.line}/>
    </>
  )
}

export default MainNavigation
