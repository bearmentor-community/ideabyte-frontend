import React from 'react'

import Meta from '../layouts/Meta'
import PageSearch from '../layouts/PageSearch'
import IdeaCard from '../components/IdeaCard'

const IDEAS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Explore = () => {
  return (
    <PageSearch>
      <Meta title="Explore Ideas" />
      <h1>Explore Ideas</h1>
      <section>
        {IDEAS.map((item, index) => {
          return <IdeaCard key={index} id={item} />
        })}
      </section>
    </PageSearch>
  )
}

export default Explore
