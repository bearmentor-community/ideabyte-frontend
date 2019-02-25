import React from 'react'
import styled from '@emotion/styled'

import Link from '../components/Link'
import Span from './Span'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 5px 0;
`

const NavLi = styled.li`
  display: inline;
  margin: 0 50px;
  font-weight: bold;
`

const Logo = styled.img`
  height: 80px;
`

const Navigation = () => {
  const isLoggedIn = false

  return (
    <Nav>
      <NavUl>
        <NavLi>
          <Link to="/">
            <Span>Home</Span>
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/about">
            <Span>About</Span>
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/">
            <Logo
              src="/assets/logo/ideabyte-logo-white.svg"
              alt="Idea Byte Logo"
            />
          </Link>
        </NavLi>
        {!isLoggedIn && (
          <NavLi>
            <Link to="/register">
              <Span>Register</Span>
            </Link>
          </NavLi>
        )}
        {!isLoggedIn && (
          <NavLi>
            <Link to="/login">
              <Span>Login</Span>
            </Link>
          </NavLi>
        )}
        {isLoggedIn && (
          <NavLi>
            <Link to="/post">
              <Span>Post Idea</Span>
            </Link>
          </NavLi>
        )}
        {isLoggedIn && (
          <NavLi>
            <Link to="/profile">
              <Span>My Profile</Span>
            </Link>
          </NavLi>
        )}
      </NavUl>
    </Nav>
  )
}

export default Navigation
