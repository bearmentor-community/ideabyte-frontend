import React from 'react'
import styled from '@emotion/styled'

import Link from '../components/Link'
import Anchor from '../components/Anchor'

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
            <Anchor>Home</Anchor>
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/about">
            <Anchor>About</Anchor>
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
              <Anchor>Register</Anchor>
            </Link>
          </NavLi>
        )}
        {!isLoggedIn && (
          <NavLi>
            <Link to="/login">
              <Anchor>Login</Anchor>
            </Link>
          </NavLi>
        )}
        {isLoggedIn && (
          <NavLi>
            <Link to="/post">
              <Anchor>Post Idea</Anchor>
            </Link>
          </NavLi>
        )}
        {isLoggedIn && (
          <NavLi>
            <Link to="/profile">
              <Anchor>My Profile</Anchor>
            </Link>
          </NavLi>
        )}
      </NavUl>
    </Nav>
  )
}

export default Navigation
