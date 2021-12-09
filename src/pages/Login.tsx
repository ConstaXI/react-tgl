import Authentication from '../components/Authentication'
import classes from './Login.module.css'

const Login = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.top}>The <br/> Greatest <br/> App</h1>
        <h1 className={classes.middle}>for</h1>
        <h1 className={classes.bottom}>LOTTERY</h1>
      </div>
      <Authentication/>
    </div>
  )
}

export default Login
