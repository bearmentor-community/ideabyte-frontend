import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import IdeaContent from '../components/IdeaContent'

import { getOneIdea } from '../redux/actions/idea'

const Idea = ({ idea, isLoading, dispatch }) => {
  // asynchronous get ideas from backend API
  // just like in componentDidMount()
  useEffect(() => {
    dispatch(
      getOneIdea({
        id: 1
      })
    )
  }, []) // prevent data update

  return (
    <PageSimple width="100%">
      <Meta title={idea.title} />

      <Center>
        <IdeaContent />
      </Center>
    </PageSimple>
  )
}

const mapStateToProps = state => {
  return {
    idea: state.idea.data,
    isLoading: state.idea.isLoading
  }
}

export default connect(mapStateToProps)(Idea)
