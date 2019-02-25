import React from 'react'

import HeaderSpecial from '../components/HeaderSpecial'
import Footer from '../components/Footer'

const PageSpecial = ({ children }) => {
  return (
    <main>
      <HeaderSpecial />
      {children}
      <Footer />
    </main>
  )
}

export default PageSpecial
