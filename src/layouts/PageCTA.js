import React from 'react'

import Page from './Page'
import HeaderCTA from '../components/HeaderCTA'
import Content from '../components/Content'
import Footer from '../components/Footer'

const PageCTA = ({ children }) => {
  return (
    <Page>
      <HeaderCTA />
      <Content>{children}</Content>
      <Footer />
    </Page>
  )
}

export default PageCTA
