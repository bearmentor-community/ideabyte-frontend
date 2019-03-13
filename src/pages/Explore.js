import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageSearch from '../layouts/PageSearch'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaCards from '../components/IdeaCards'
import Heading from '../components/Heading'

import { getIdeas } from '../redux/actions/ideas'

const Explore = ({ dispatch }) => {
  // asynchronous get ideas from backend API
  // just like in componentDidMount()
  useEffect(() => {
    dispatch(getIdeas())
  }, [])

  return (
    <PageSearch>
      <Meta title="Explore Ideas" />

      <Center>
        <Heading size={2} scheme="light">
          Explore Ideas by People
        </Heading>
        <IdeaCards />
      </Center>
    </PageSearch>
  )
}

export default connect()(Explore)
