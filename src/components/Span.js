import React from 'react'
import styled from '@emotion/styled'

const MenuSpan = styled.span`
  color: ${props => (props.scheme === 'dark' ? '#fff' : '#333')};
  color: ${props => props.color};
  transition: 0.2s;

  &:hover {
    color: ${props =>
      props.scheme === 'dark' ? 'hsla(0, 0%, 80%, 1)' : 'hsla(0, 0%, 30%, 1)'};
  }
`

const ExtraSpan = styled.span`
  color: ${props => (props.scheme === 'dark' ? '#fff' : '#333')};
  width: 100%;

  &:after {
    content: '';
    display: block;
    border-bottom: 2px solid hsla(145, 50%, 62%, 1);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(0.2);
  }
`

const Span = ({ type, scheme, color, children }) => {
  if (type === 'extra') {
    return (
      <ExtraSpan scheme={scheme} color={color}>
        {children}
      </ExtraSpan>
    )
  } else if (type === 'menu') {
    return (
      <MenuSpan scheme={scheme} color={color}>
        {children}
      </MenuSpan>
    )
  } else {
    return (
      <MenuSpan scheme={scheme} color={color}>
        {children}
      </MenuSpan>
    )
  }
}

export default Span
