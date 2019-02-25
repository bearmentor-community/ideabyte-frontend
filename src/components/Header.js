import React from 'react'

import styled from '@emotion/styled'

const StyledHeader = styled.header`
  margin-bottom: 20px;
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url('/assets/images/cover-background.jpg') no-repeat center;
  background-size: cover;
`

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

export default Header
