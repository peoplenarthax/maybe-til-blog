import React from "react"
import { Header } from './header'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header title={title} />

      <div className="gradient-background" aria-hidden="true" />
      
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          <a
            href="https://twitter.com/peoplenarthax"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
        </a>{' '}
        &bull;{' '}
          <a
            href="https://github.com/peoplenarthax"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
        </a>{' '}
        &bull;{' '}
          <a
            href="https://stackoverflow.com/users/4734657/sirpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
        </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
