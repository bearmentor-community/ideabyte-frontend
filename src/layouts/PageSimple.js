import React from 'react'

import Page from './Page'
import HeaderSimple from '../components/HeaderSimple'
import Content from '../components/Content'
import Footer from '../components/Footer'

const PageSimple = ({ children }) => {
  return (
    <Page>
      <HeaderSimple />
      <Content>{children}</Content>
      <Footer />
    </Page>
  )
}

export default PageSimple
