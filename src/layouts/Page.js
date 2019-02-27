import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const StyledPage = styled.div`
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Page = ({ children }) => {
  return (
    <StyledPage>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
      />

      {children}
    </StyledPage>
  )
}

export default Page
