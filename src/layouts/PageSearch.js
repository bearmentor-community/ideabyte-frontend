import React from 'react'

import Page from './Page'
import HeaderSearch from '../components/HeaderSearch'
import Content from '../components/Content'
import Footer from '../components/Footer'

const PageSearch = ({ children }) => {
  return (
    <Page>
      <HeaderSearch />
      <Content>{children}</Content>
      <Footer />
    </Page>
  )
}

export default PageSearch
