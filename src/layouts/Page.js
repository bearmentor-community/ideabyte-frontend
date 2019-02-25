import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

const StyledMain = styled.main`
  font-family: 'Fira Sans', Helvetica, sans-serif;
`

const Page = ({ children }) => {
  return (
    <StyledMain>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>

      {children}
    </StyledMain>
  )
}

export default Page
