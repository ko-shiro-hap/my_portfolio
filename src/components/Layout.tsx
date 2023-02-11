import { ReactElement } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import TopButton from './TopButton'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Header></Header>
        <div className="relative flex h-full items-center">
          <Sidebar></Sidebar>
          <main className='mx-auto px-4 pt-5 pb-10 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg w-full max-h-full overflow-auto'>
            {children}
          </main>
        </div>
          <Footer></Footer>
      </div>
      <TopButton></TopButton>
    </>
)
