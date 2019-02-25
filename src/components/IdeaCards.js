import React from 'react'

import IdeaCard from './IdeaCard'

const IdeaCards = ({ amount }) => {
  const IDEAS = Array.apply(null, { length: amount }).map(Number.call, Number)

  return (
    <section>
      {IDEAS.map((item, index) => {
        return <IdeaCard key={index} id={item} />
      })}
    </section>
  )
}

export default IdeaCards
