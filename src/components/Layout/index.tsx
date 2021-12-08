import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = (props: Props): JSX.Element => {
  return (
    <main>{props.children}</main>
  )
}

export default Layout
