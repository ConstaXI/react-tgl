import { ReactNode } from 'react'
import MainNavigation from '../MainNavigation'

type Props = {
  children: ReactNode
}

const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
