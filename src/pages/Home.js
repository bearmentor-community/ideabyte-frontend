import React from 'react'

import Meta from '../layouts/Meta'
import PageCTA from '../layouts/PageCTA'
import IdeaCard from '../components/IdeaCard'

const IDEAS = [1, 2, 3, 4, 5, 6]

const Home = () => {
  return (
    <PageCTA>
      <Meta />
      <h1>Home</h1>
      <section>
        {IDEAS.map((item, index) => {
          return <IdeaCard key={index} id={item} />
        })}
      </section>
    </PageCTA>
  )
}

export default Home
