import { ReactElement } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Header></Header>
        <div className="flex h-full">
          <Sidebar></Sidebar>
          {children}
        </div>
          <Footer></Footer>
      </div>
    </>
)
