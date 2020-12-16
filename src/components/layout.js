import React from "react"
import { Header } from './header'
import { Footer } from './footer'

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header title={title} />

      <div className="gradient-background" aria-hidden="true" />
      
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
