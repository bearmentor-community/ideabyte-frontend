import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageCoverButtons from '../layouts/PageCoverButtons'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaCards from '../components/IdeaCards'

import { getIdeas } from '../redux/actions/ideas'

const Home = ({ dispatch }) => {
  // asynchronous get ideas from backend API
  // just like in componentDidMount()
  useEffect(() => {
    dispatch(getIdeas())
  })

  return (
    <PageCoverButtons>
      <Meta />

      <Center>
        <IdeaCards />
      </Center>
    </PageCoverButtons>
  )
}

export default connect()(Home)
