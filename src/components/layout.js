import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'styled-components'

import Navigation from './Navigation'
import withAuthentication from './Session/withAuthentication'

injectGlobal`

body {
  font-family: Helvetica;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <meta charSet="uft-8" />
          <title>six minute morning</title>
          <link rel="canonical" href="http://tannerg.com" />
        </Helmet>
        <div className="app">
          <Navigation />
          {children}
        </div>
      </div>
    )}
  />
)

export default withAuthentication(Layout)
