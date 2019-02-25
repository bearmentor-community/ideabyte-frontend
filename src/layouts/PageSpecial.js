import React from 'react'

import Page from './Page'
import HeaderSpecial from '../components/HeaderSpecial'
import Content from '../components/Content'
import Footer from '../components/Footer'

const PageSpecial = ({ children }) => {
  return (
    <Page>
      <HeaderSpecial />
      <Content>{children}</Content>
      <Footer />
    </Page>
  )
}

export default PageSpecial
