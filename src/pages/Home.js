import React from 'react'

import PageCTA from '../layouts/PageCTA'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaCards from '../components/IdeaCards'

const Home = () => {
  return (
    <PageCTA>
      <Meta />

      <Center>
        <IdeaCards amount={6} />
      </Center>
    </PageCTA>
  )
}

export default Home
