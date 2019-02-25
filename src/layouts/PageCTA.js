import React from 'react'

import Page from './Page'
import HeaderCTA from '../components/HeaderCTA'
import Footer from '../components/Footer'

const PageCTA = ({ children }) => {
  return (
    <Page>
      <HeaderCTA />
      {children}
      <Footer />
    </Page>
  )
}

export default PageCTA
