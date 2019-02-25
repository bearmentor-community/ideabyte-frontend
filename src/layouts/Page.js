import React from 'react'
import { Helmet } from 'react-helmet'

const Page = ({ children }) => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>

      {children}
    </main>
  )
}

export default Page
