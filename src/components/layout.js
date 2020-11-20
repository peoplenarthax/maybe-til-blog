import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isAbout = location.pathname === `${rootPath}about`
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div className="gradient-background" aria-hidden="true" />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          {header}
          <nav className="site-navigation">
            <ul>
              {isAbout && <li><a href="/">Blog</a></li>}
              {!isAbout && <li><a href="https://github.com/peoplenarthax">About</a></li>}
            </ul>
          </nav>
        </header>

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
