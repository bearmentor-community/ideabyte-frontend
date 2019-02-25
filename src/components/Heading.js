import React from 'react'
import styled from '@emotion/styled'

const StyledHeading = styled.h1`
  text-align: center;
  color: ${props => (props.color === 'white' ? '#fff' : '#333')};
  margin: 50px 0;
`

const Heading = ({ size, children }) => {
  return <StyledHeading color="white">{children}</StyledHeading>
}

export default Heading
