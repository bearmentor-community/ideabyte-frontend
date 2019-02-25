import React from 'react'

import Page from './Page'
import HeaderSearch from '../components/HeaderSearch'
import Footer from '../components/Footer'

const PageSearch = ({ children }) => {
  return (
    <Page>
      <HeaderSearch />
      {children}
      <Footer />
    </Page>
  )
}

export default PageSearch
