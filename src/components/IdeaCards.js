import React from 'react'
import styled from '@emotion/styled'

import IdeaCard from './IdeaCard'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const IdeaCards = ({ amount }) => {
  const IDEAS = Array.apply(null, { length: amount }).map(Number.call, Number)

  return (
    <Section>
      {IDEAS.map((item, index) => {
        return <IdeaCard key={index} id={item} />
      })}
    </Section>
  )
}

export default IdeaCards
