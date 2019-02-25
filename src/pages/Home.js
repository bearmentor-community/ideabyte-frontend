import React from 'react'

import Meta from '../layouts/Meta'
import PageCTA from '../layouts/PageCTA'
import IdeaCards from '../components/IdeaCards'

const Home = () => {
  return (
    <PageCTA>
      <Meta />
      <IdeaCards amount={6} />
    </PageCTA>
  )
}

export default Home
