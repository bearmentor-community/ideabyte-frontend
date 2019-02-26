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
  const isAuthenticated = false

  return (
    <Nav>
      <NavUl>
        <NavLi>
          <Link to="/">
            <Span scheme="dark">Home</Span>
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/about">
            <Span scheme="dark">About</Span>
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
        {!isAuthenticated && (
          <NavLi>
            <Link to="/register">
              <Span scheme="dark">Register</Span>
            </Link>
          </NavLi>
        )}
        {!isAuthenticated && (
          <NavLi>
            <Link to="/login">
              <Span scheme="dark">Login</Span>
            </Link>
          </NavLi>
        )}
        {isAuthenticated && (
          <NavLi>
            <Link to="/post">
              <Span scheme="dark" color="#6FCF97">
                Post Idea
              </Span>
            </Link>
          </NavLi>
        )}
        {isAuthenticated && (
          <NavLi>
            <Link to="/profile">
              <Span scheme="dark" color="#F2C94C">
                My Profile
              </Span>
            </Link>
          </NavLi>
        )}
      </NavUl>
    </Nav>
  )
}

export default Navigation
