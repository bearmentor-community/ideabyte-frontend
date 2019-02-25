import React from 'react'
import styled from '@emotion/styled'

const StyledSpan = styled.span`
  color: ${props => (props.scheme === 'dark' ? '#fff' : '#333')};
  transition: 0.5s;

  &:hover {
    color: ${props =>
      props.scheme === 'dark' ? 'hsla(0, 0%, 80%, 1)' : 'hsla(0, 0%, 30%, 1)'};
  }
`

const Span = ({ scheme, children }) => {
  return <StyledSpan scheme="dark">{children}</StyledSpan>
}

export default Span
