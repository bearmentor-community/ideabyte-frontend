import React from 'react'

import Page from './Page'
import HeaderSpecial from '../components/HeaderSpecial'
import Footer from '../components/Footer'

const PageSpecial = ({ children }) => {
  return (
    <Page>
      <HeaderSpecial />
      {children}
      <Footer />
    </Page>
  )
}

export default PageSpecial
