import React from 'react'

import PageSearch from '../layouts/PageSearch'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaCards from '../components/IdeaCards'
import Heading from '../components/Heading'

const Explore = () => {
  return (
    <PageSearch>
      <Meta title="Explore Ideas" />

      <Center>
        <Heading size={2} scheme="light">
          Explore Ideas
        </Heading>
        <IdeaCards amount={9} />
      </Center>
    </PageSearch>
  )
}

export default Explore
