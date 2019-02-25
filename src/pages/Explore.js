import React from 'react'

import Meta from '../layouts/Meta'
import PageSearch from '../layouts/PageSearch'
import IdeaCards from '../components/IdeaCards'

const Explore = () => {
  return (
    <PageSearch>
      <Meta title="Explore Ideas" />
      <h1>Explore Ideas</h1>
      <IdeaCards amount={9} />
    </PageSearch>
  )
}

export default Explore
