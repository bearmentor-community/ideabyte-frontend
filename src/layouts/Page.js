import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

const Container = styled.div`
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Page = ({ children }) => {
  return (
    <Container>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>

      {children}
    </Container>
  )
}

export default Page
