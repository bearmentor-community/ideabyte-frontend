import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

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
  padding-left: 0;
`

const NavLi = styled.li`
  display: inline;
  font-weight: bold;
  margin: 0 20px;

  @media all and (max-width: 768px) {
    margin: 0 10px;
  }
`

const Logo = styled.img`
  height: 80px;

  &.big {
    display: block;
  }
  &.small {
    display: none;
  }

  @media all and (max-width: 768px) {
    &.big {
      display: none;
    }
    &.small {
      display: block;
    }
  }
`

const Navigation = props => {
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
              className="big"
              src="/assets/logo/ideabyte-logo-white.svg"
              alt="Idea Byte Logo"
            />
            <Logo
              className="small"
              src="/assets/logo/ideabyte-icon.svg"
              alt="Idea Byte Icon"
            />
          </Link>
        </NavLi>

        {/* if isAuthenticated is false, show the register link */}
        {!props.isAuthenticated && (
          <NavLi>
            <Link to="/register">
              <Span scheme="dark">Register</Span>
            </Link>
          </NavLi>
        )}
        {/* if isAuthenticated is false, show the login link */}
        {!props.isAuthenticated && (
          <NavLi>
            <Link to="/login">
              <Span scheme="dark">Login</Span>
            </Link>
          </NavLi>
        )}

        {/* if isAuthenticated is true, show the post link */}
        {props.isAuthenticated && (
          <NavLi>
            <Link to="/post">
              <Span scheme="dark" color="#6FCF97">
                Post
              </Span>
            </Link>
          </NavLi>
        )}
        {/* if isAuthenticated is true, show the profile link */}
        {props.isAuthenticated && (
          <NavLi>
            <Link to="/profile">
              <Span scheme="dark" color="#F2C94C">
                Profile
              </Span>
            </Link>
          </NavLi>
        )}
      </NavUl>
    </Nav>
  )
}

// Get data from Redux store
// Function to map the specified state to componet's props
const mapStateToProps = state => {
  return {
    // get the value from the store, specifically
    isAuthenticated: state.user.isAuthenticated || false
    // then it's accessible through props.isAuthenticated
  }
}

// Connect the Redux store's state to the Component as props
export default connect(mapStateToProps)(Navigation)

/**
 * This is how connect function works
 *
 * 1. Connect is a Higher Order Function, so it requires another function/Component
 * connect(function)(Component)
 *
 * 2. Connect function can return other function to be used again
 * const connect = (Component) => {
 *   // someCodeHere
 *   const newComponentFunction = (Component) => {
 *     // someCodeHere
 *   }
 *   return newComponentFunction
 * }
 */
