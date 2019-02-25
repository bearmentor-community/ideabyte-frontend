import React from 'react'

import HeaderSearch from '../components/HeaderSearch'
import Footer from '../components/Footer'

const PageSearch = ({ children }) => {
  return (
    <main>
      <HeaderSearch />
      {children}
      <Footer />
    </main>
  )
}

export default PageSearch
