import React,{ ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ( props ) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
    
      
    `}</style>

  </div>
)

export default Layout
