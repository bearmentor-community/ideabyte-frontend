import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { DotLoader } from 'react-spinners'

import IdeaCard from './IdeaCard'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const IdeaCards = ({ isLoading, ideas }) => {
  if (!isLoading) {
    return (
      <Section>
        {ideas.map((item, index) => {
          return <IdeaCard key={index} item={item} />
        })}
      </Section>
    )
  } else {
    return (
      <section>
        <DotLoader
          css={override}
          sizeUnit={'px'}
          size={100}
          color={'#f1c84b'}
          loading={true}
        />
        <h1>LOADING IDEAS...</h1>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    ideas: state.ideas.data,
    isLoading: state.ideas.isLoading
  }
}

export default connect(mapStateToProps)(IdeaCards)
