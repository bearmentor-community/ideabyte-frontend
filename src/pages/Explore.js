import React from 'react'

import PageSearch from '../layouts/PageSearch'
import IdeaCard from '../components/IdeaCard'

const IDEAS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Explore = () => {
  return (
    <PageSearch>
      <h1>Explore</h1>
      <section>
        {IDEAS.map((item, index) => {
          return <IdeaCard key={index} id={item} />
        })}
      </section>
    </PageSearch>
  )
}

export default Explore
