import React from 'react'
import styled from '@emotion/styled'

const StyledHr = styled.hr`
  border: 1px solid;
  color: ${({ color }) =>
    color === 'yellow' ? 'hsla(45, 86%, 62%, 1)' : 'hsla(145,50%,62%,1);'};
  max-width: 300px;
`

const HorizontalRule = ({ color }) => {
  return <StyledHr color={color} />
}

export default HorizontalRule
