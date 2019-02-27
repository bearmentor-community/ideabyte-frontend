import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import IdeaCard from './IdeaCard'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const IdeaCards = props => {
  if (props.ideas) {
    return (
      <Section>
        {props.ideas.map((item, index) => {
          return <IdeaCard key={index} item={item} />
        })}
      </Section>
    )
  } else {
    return (
      <Section>
        <span>LOADING IDEAS...</span>
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    ideas: state.ideas
  }
}

export default connect(mapStateToProps)(IdeaCards)
