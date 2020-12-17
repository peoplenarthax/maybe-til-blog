import React from "react"
import { Header } from './header'
import { Footer } from './footer'

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header title={title} />

      <div className="gradient-background" aria-hidden="true" />

      <main className="global-wrapper">{children}</main>
      
      <Footer />
    </>
  )
}

export default Layout
