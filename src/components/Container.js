import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;

  a {
    text-decoration: none;
    margin: 10px 10px;
    color: white;
  }
`
const StyledHeader = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('../assets/images/cover-background.jpg');
  border: 1px solid #000000;
  box-sizing: border-box;
  opacity: 0.9;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 1024px;
  height: 300px;
  margin: 0 auto;
`

const PararagraphHeader = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  color: white;
  margin: 40px auto;
`

const ButtonGetStarted = styled.button`
  background-color: #6fcf97;
  color: solid black;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 100px;
  height: 25px;
  margin: 0 20px;
`

const ButtonExploreIdeas = styled.button`
  background-color: #f2c94c;
  color: solid black;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 100px;
  height: 25px;
  margin: 0 20px;
`
const SearchStyle = styled.button`
  background-color: #333333;
  color: white;
  width: 110px;
  margin: 0 auto;
  border: none;
  font-size: 14px;
`
const SpanDiv = styled.div`
  background-color: #333333;
  width: 1024px;
  height: 30px;
`

const SearchLogo = styled.img`
  width: 10px;
  height: 10px;
`
const LogoIdeaByte = styled.img`
  height: 25px;
`

class Container extends Component {
  render() {
    return (
      <div>
        <StyledHeader>
          <NavStyle>
            <Link to="/">
              <b>Home</b>{' '}
            </Link>
            <Link to="/About">
              <b>About</b>{' '}
            </Link>
            <LogoIdeaByte src="../assets/exports/logo-ideabyte.png" alt="" />
            <Link to="/Register">
              <b>Register</b>{' '}
            </Link>
            <Link to="/Login">
              <b>Login</b>{' '}
            </Link>
          </NavStyle>
          <PararagraphHeader>
            <p>
              {' '}
              <b>Shares and improve your ideas</b>{' '}
            </p>
            <p>
              {' '}
              <b> with the word</b>
            </p>
          </PararagraphHeader>

          <div>
            <ButtonGetStarted>
              <b>Get Started</b>{' '}
            </ButtonGetStarted>
            <ButtonExploreIdeas>
              <b>Explore Ideas</b>{' '}
            </ButtonExploreIdeas>
          </div>
        </StyledHeader>
        <SpanDiv>
          <SearchLogo src="../assets/images/search-icon.svg" />
          <SearchStyle>Search Ideas...</SearchStyle>
        </SpanDiv>
      </div>
    )
  }
}

export default Container
