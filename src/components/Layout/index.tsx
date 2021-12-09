import { ReactNode } from 'react'
import MainNavigation from '../MainNavigation'

type Props = {
  children: ReactNode
}

const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <MainNavigation/>
      <main>
        <section>
          {props.children}
        </section>
      </main>
    </>
  )
}

export default Layout
