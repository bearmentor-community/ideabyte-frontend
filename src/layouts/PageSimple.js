import React from 'react'

import Page from './Page'
import HeaderSimple from '../components/HeaderSimple'
import Footer from '../components/Footer'

const PageSimple = ({ children }) => {
  return (
    <Page>
      <HeaderSimple />
      {children}
      <Footer />
    </Page>
  )
}

export default PageSimple
