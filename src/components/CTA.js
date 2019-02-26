import React from 'react'
import styled from '@emotion/styled'

import Link from './Link'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const CTAButton = styled.button`
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

const CTA = ({ children }) => {
  return (
    <StyledDiv>
      <Link to="/register">
        <CTAButton color="green">Get Started</CTAButton>
      </Link>
      <Link to="/explore">
        <CTAButton color="yellow">Explore Ideas</CTAButton>
      </Link>
    </StyledDiv>
  )
}

export default CTA
