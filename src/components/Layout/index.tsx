import MainNavigation from '../MainNavigation'

type Props = {
  children: JSX.Element
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
