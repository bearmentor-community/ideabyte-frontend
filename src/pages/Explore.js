import React from 'react'

import Meta from '../layouts/Meta'
import PageSearch from '../layouts/PageSearch'
import IdeaCards from '../components/IdeaCards'
import Heading from '../components/Heading'

const Explore = () => {
  return (
    <PageSearch>
      <Meta title="Explore Ideas" />
      <Heading size={2} scheme="light">
        Explore Ideas
      </Heading>
      <IdeaCards amount={9} />
    </PageSearch>
  )
}

export default Explore
