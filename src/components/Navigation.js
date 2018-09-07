import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import AuthUserContext from './Session/AuthUserContext'
import SignOutButton from './SignOut'
import * as routes from '../constants/routes'

const StyledNavigation = styled.div`
  z-index: 2;
  position: relative;

  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
  }

  a {
    margin-right: 1em;
    color: black;
    text-decoration: none;
  }
`

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to={routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={routes.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </StyledNavigation>
)

const NavigationNonAuth = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to={routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  </StyledNavigation>
)

export default Navigation
