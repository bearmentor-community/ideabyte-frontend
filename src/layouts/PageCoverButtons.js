import React from 'react'

import Page from './Page'
import HeaderCoverButtons from '../components/HeaderCoverButtons'
import Content from '../components/Content'
import Footer from '../components/Footer'

const PageCoverButtons = ({ children }) => {
  return (
    <Page>
      <HeaderCoverButtons />
      <Content>{children}</Content>
      <Footer />
    </Page>
  )
}

export default PageCoverButtons
