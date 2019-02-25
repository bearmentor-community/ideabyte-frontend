import React from 'react'

import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  background: #333;
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 50px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>Idea Byte (PT. Ideabyte Teknologi Edukasi) &copy; 2019 </p>
    </StyledFooter>
  )
}

export default Footer
