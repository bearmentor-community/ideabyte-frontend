import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import Link from './Link'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const CoverButton = styled.button`
  background: ${props =>
    props.color === 'green'
      ? 'hsla(145, 50%, 62%, 1)'
      : props.color === 'yellow'
      ? 'hsla(45, 86%, 62%, 1)'
      : 'hsla(0, 0%, 20%, 1)'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  padding: 10px 40px;
  transition: 0.2s;

  &:hover {
    background: ${props =>
      props.color === 'green'
        ? 'hsla(145, 50%, 72%, 1)'
        : props.color === 'yellow'
        ? 'hsla(45, 86%, 72%, 1)'
        : 'hsla(0, 0%, 30%, 1)'};
  }
`

const CoverButtons = props => {
  return (
    <StyledDiv>
      {/* render get started button if not authenticated yet */}
      {!props.isAuthenticated && (
        <Link to="/register">
          <CoverButton color="green">Get Started</CoverButton>
        </Link>
      )}
      <Link to="/explore">
        <CoverButton color="yellow">Explore Ideas</CoverButton>
      </Link>
    </StyledDiv>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(CoverButtons)
