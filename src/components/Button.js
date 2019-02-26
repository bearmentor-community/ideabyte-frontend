import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background: ${props =>
    props.color === 'green'
      ? 'hsla(145, 50%, 62%, 1)'
      : props.color === 'yellow'
      ? 'hsla(45, 86%, 62%, 1)'
      : props.color === 'red'
      ? 'hsla(0, 79%, 63%, 1)'
      : 'hsla(0, 0%, 20%, 1)'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  padding: 10px 40px;
  transition: 0.5s;

  &:hover {
    background: ${props =>
      props.color === 'green'
        ? 'hsla(145, 50%, 72%, 1)'
        : props.color === 'yellow'
        ? 'hsla(45, 86%, 72%, 1)'
        : props.color === 'red'
        ? 'hsla(0, 79%, 73%, 1)'
        : 'hsla(0, 0%, 30%, 1)'};
  }
`

const Button = ({ color, children }) => {
  return <StyledButton color={color}>{children}</StyledButton>
}

export default Button
