import React from 'react'

import PageCoverButtons from '../layouts/PageCoverButtons'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaCards from '../components/IdeaCards'

const Home = () => {
  return (
    <PageCoverButtons>
      <Meta />

      <Center>
        <IdeaCards amount={6} />
      </Center>
    </PageCoverButtons>
  )
}

export default Home
